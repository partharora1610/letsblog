import { Prisma, Resource } from '@prisma/client';
import { IDatabase } from 'interfaces';
import { IResourceModel } from 'interfaces/models/resource.model';

export default class ResourceModel implements IResourceModel {
  db: IDatabase;
  constructor(db: IDatabase) {
    this.db = db;
  }

  async create(args: Prisma.ResourceCreateArgs): Promise<Resource> {
    return this.db.client.resource.create(args);
  }

  async findFirst(args: Prisma.ResourceFindFirstArgs): Promise<Resource | null> {
    return this.db.client.resource.findFirst(args);
  }

  async findUnqiue(args: Prisma.ResourceFindUniqueArgs): Promise<Resource | null> {
    return this.db.client.resource.findUnique(args);
  }

  async findMany(args: Prisma.ResourceFindManyArgs): Promise<Resource[]> {
    return this.db.client.resource.findMany(args);
  }

  async update(args: Prisma.ResourceUpdateArgs): Promise<Resource> {
    return this.db.client.resource.update(args);
  }

  async updateMany(args: Prisma.ResourceUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return this.db.client.resource.updateMany(args);
  }

  async upsert(args: Prisma.ResourceUpsertArgs): Promise<Resource> {
    return this.db.client.resource.upsert(args);
  }

  async delete(args: Prisma.ResourceDeleteArgs): Promise<Resource> {
    return this.db.client.resource.delete(args);
  }

  async deleteMany(args: Prisma.ResourceDeleteManyArgs): Promise<Prisma.BatchPayload> {
    return this.db.client.resource.deleteMany(args);
  }
}
