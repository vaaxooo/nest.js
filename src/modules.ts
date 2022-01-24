import { Module } from '@nestjs/common';
import { ArticleController } from './articles/controllers/ArticleController';
import {PostgresModule} from "./modules/postgres.module";

@Module({
    imports: [PostgresModule],
    controllers: [ArticleController],
    providers: [],
})
export class AppModule {}