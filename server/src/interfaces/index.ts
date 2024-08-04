import { PrismaClient } from '@prisma/client';
import { IUserModel } from './models/user.model';
import { IResourceModel } from './models/resource.model';

export type txClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'>;

export interface IDatabase {
  client: PrismaClient | txClient;
}

export interface IContext {
  db: IDatabase;
  users: IUserModel;
  resources: IResourceModel;
}
