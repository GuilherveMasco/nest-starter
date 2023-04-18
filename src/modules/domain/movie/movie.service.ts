import { Injectable } from "@nestjs/common";
import { MovieEntity } from "./entities/movie.entity";
import { ArtistEntity } from "./entities/artist.entity";
import { GenreEntity } from "./entities/genre.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(MovieEntity)
        private readonly movieRepository: Repository<MovieEntity>,
        @InjectRepository(ArtistEntity)
        private readonly artistRepository: Repository<ArtistEntity>,
        @InjectRepository(GenreEntity)
        private readonly genreRepository: Repository<GenreEntity>,
    ) {}
}
