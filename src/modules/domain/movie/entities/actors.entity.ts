import { BaseEntity } from "src/common/entities/base.entity";
import { Column } from "typeorm";

export class ActorEntity extends BaseEntity {
    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    birthDate: Date;
}