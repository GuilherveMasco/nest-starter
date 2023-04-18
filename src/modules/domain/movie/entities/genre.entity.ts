import { BaseEntity } from "src/common/entities/base.entity";
import { Column, ManyToMany } from "typeorm";
import { MovieEntity } from "./movie.entity";

export class GenreEntity extends BaseEntity {
    @Column()
    name: string;

    @ManyToMany(() => MovieEntity, movie => movie.genres)
    moviesGenre: MovieEntity[];
}