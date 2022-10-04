import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseIdEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}

export abstract class BaseAuditedEntity extends BaseIdEntity {
  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: boolean;
}
