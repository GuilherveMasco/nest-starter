import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { MovieEntity } from "./entities/movie.entity";
import { ArtistEntity } from "./entities/artist.entity";
import { GenreEntity } from "./entities/genre.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { ArrayContains, Repository } from "typeorm";
import { CreateMovieDto } from "./dto/create-movie.dto";

@Injectable()
export class MovieService {
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>
    @InjectRepository(ArtistEntity)
    private readonly artistRepository: Repository<ArtistEntity>
    @InjectRepository(GenreEntity)
    private readonly genreRepository: Repository<GenreEntity>

    async createMovie(createMovieDto: CreateMovieDto){
        const director = await this.artistRepository.findOneBy({
            id: createMovieDto.directorId
        })

        if (!director) {
            throw new HttpException('Director not found', HttpStatus.BAD_REQUEST);
        }

        const cast = await this.artistRepository.findBy({
            id: ArrayContains(createMovieDto.castIds)
        })

        if (cast.length !== createMovieDto.castIds.length) {
            throw new HttpException('Some actors are missing', HttpStatus.BAD_REQUEST);
        }

        const genres = await this.genreRepository.findBy({
            id: ArrayContains(createMovieDto.genresIds)
        })

        if (genres.length !== createMovieDto.genresIds.length) {
            throw new HttpException('Some genres are missing', HttpStatus.BAD_REQUEST);
        }

        const newEntity = await this.movieRepository.create({
            ...createMovieDto,
            director,
            cast,
            genres
        });
        return await this.movieRepository.save(newEntity);
    }
}
