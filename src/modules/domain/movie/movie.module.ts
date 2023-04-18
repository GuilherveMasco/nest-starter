import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieEntity } from "./entities/movie.entity";
import { ArtistEntity } from "./entities/artist.entity";
import { GenreEntity } from "./entities/genre.entity";
import { MovieService } from "./movie.service";
import { MovieController } from "./movie.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            MovieEntity,
            ArtistEntity,
            GenreEntity,
        ]),
    ],
    providers: [MovieService],
    controllers: [MovieController],
    exports: [TypeOrmModule]
})

export class MovieModule {}