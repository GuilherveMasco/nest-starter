import { BaseEntity } from "src/common/entities/base.entity";
import { Column, ManyToMany, OneToMany } from "typeorm";
import { MovieEntity } from "./movie.entity";

export class ArtistEntity extends BaseEntity {
    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    birthDate: Date;

    @ManyToMany(() => MovieEntity, movie => movie.cast)
    moviesCast: MovieEntity[];

    @OneToMany(() => MovieEntity, movie => movie.director)
    moviesDirected: MovieEntity[];
}