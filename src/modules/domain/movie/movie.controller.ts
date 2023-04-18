import { Body, Controller, Post } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { JoiPipe } from "nestjs-joi";

@Controller('movies')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Post('create')
    async create(@Body(new JoiPipe({ group: 'CREATE' })) CreateMovieDto: CreateMovieDto) {
        return await this.movieService.createMovie(CreateMovieDto);
    }
}
