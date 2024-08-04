import AbstractController from './index.controller';
import { NextFunction, Request, Response } from 'express';
import { InternalServerError } from 'errors/internal-server-error';
import { validateRequestBody } from 'validators/validateRequest';
import { z } from 'zod';
import googleOAuthClient from 'libs/google.lib';

class AuthController extends AbstractController {
  postAuthGoogleCallback() {
    return [
      validateRequestBody(z.object({ code: z.string().min(10) })),
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const { code } = req.body as unknown as { code: string };

          const payload = await googleOAuthClient.getTokenAndVerifyFromCode(code);
          const existingUser = await this.ctx.db.client.user.findFirst({
            where: {},
          });

          if (existingUser == null) {
            const newUser = await this.ctx.db.client.user.create({
              data: {
                email: payload.email as string,
                name: payload.given_name as string,
                password: 'password',
              },
            });
            req.session.currentUserId = newUser.id;
            res.sendStatus(201);
          } else {
            req.session.currentUserId = existingUser.id;
            res.sendStatus(200);
          }
        } catch (e) {
          console.error(e);
          next(new InternalServerError());
        }
      },
    ];
  }
}

export default AuthController;
