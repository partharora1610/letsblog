import { Prisma, Resource } from '@prisma/client';
import { IDatabase } from 'interfaces';

export interface IResourceModel {
  db: IDatabase;

  create(args: Prisma.ResourceCreateArgs): Promise<Resource>;

  findFirst(args: Prisma.ResourceFindFirstArgs): Promise<Resource | null>;

  findUnqiue(args: Prisma.ResourceFindUniqueArgs): Promise<Resource | null>;

  findMany(args: Prisma.ResourceFindManyArgs): Promise<Resource[]>;

  update(args: Prisma.ResourceUpdateArgs): Promise<Resource>;

  updateMany(args: Prisma.ResourceUpdateManyArgs): Promise<Prisma.BatchPayload>;

  upsert(args: Prisma.ResourceUpsertArgs): Promise<Resource>;

  delete(args: Prisma.ResourceDeleteArgs): Promise<Resource>;

  deleteMany(args: Prisma.ResourceDeleteManyArgs): Promise<Prisma.BatchPayload>;
}
