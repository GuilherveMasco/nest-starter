import { BaseEntity } from "src/common/entities/base.entity";
import { Column } from "typeorm";

export class MovieEntity extends BaseEntity {
    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @Column()
    year: number;

    //Diretor - m-o
    //Atores - m-n
    //Gênero - m-n

    @Column()
    image: string;
}