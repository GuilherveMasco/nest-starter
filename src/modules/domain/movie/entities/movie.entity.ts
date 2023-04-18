import { BaseEntity } from "src/common/entities/base.entity";
import { Column, ManyToMany, ManyToOne } from "typeorm";
import { ArtistEntity } from "./artist.entity";
import { GenreEntity } from "./genre.entity";

export class MovieEntity extends BaseEntity {
    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @Column()
    year: number;

    @ManyToMany(() => ArtistEntity, artist => artist.moviesCast)
    cast: ArtistEntity[];

    @ManyToOne(() => ArtistEntity, artist => artist.moviesDirected)
    director: ArtistEntity;

    @ManyToMany(() => GenreEntity, artist => artist.moviesGenre)
    genres: GenreEntity[];

    @Column()
    image: string;
}