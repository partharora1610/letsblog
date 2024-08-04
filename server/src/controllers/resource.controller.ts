import { Request, Response } from 'express';
import AbstractController from './index.controller';
import { validateRequestBody, validateRequestParams } from 'validators/validateRequest';
import z from 'zod';

class ResourceController extends AbstractController {
  get() {
    return [
      validateRequestParams(z.object({ id: z.string() })),
      async (req: Request, res: Response) => {
        try {
          const { id } = req.params as unknown as { id: string };

          // getting resource by ID
          const data = await this.ctx.resources.findUnqiue({
            where: {
              id,
            },
          });

          return data;
        } catch (e) {
          console.log(e);
          res.sendStatus(500);
        }
      },
    ];
  }

  create() {
    return [
      validateRequestBody(
        z.object({
          name: z.string(),
          description: z.string(),
        }),
      ),
      async (req: Request, res: Response) => {
        try {
          const data = await this.ctx.resources.create({
            data: req.body,
          });

          return data;
        } catch (e) {
          console.log(e);
          res.sendStatus(500);
        }
      },
    ];
  }

  getAll() {
    return [
      async (__: Request, res: Response) => {
        try {
          const data = await this.ctx.resources.findMany({});

          return data;
        } catch (e) {
          console.log(e);
          res.sendStatus(500);
        }
      },
    ];
  }
}

export default ResourceController;
