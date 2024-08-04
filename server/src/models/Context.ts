import { IContext, IDatabase } from 'interfaces';
import { IUserModel } from 'interfaces/models/user.model';
import UserModel from './user.model';
import { IResourceModel } from 'interfaces/models/resource.model';
import ResourceModel from './resource.model';

export default class Context implements IContext {
  db: IDatabase;
  users: IUserModel;
  resources: IResourceModel;

  constructor(database: IDatabase) {
    this.db = database;
    this.users = new UserModel(database);
    this.resources = new ResourceModel(database);
  }
}
