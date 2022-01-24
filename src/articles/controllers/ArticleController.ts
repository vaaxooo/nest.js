import {Body, Controller, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import { Article } from '../../models/article.entity';

@Controller('articles')
export class ArticleController {
    @Get()
    async index() {
        return {
            articles: await Article.find()
        };
    }

    @Get(':id')
    async find(@Param('id', ParseIntPipe) id: number) {
        return Article.findOne({id});
    }

    @Post('create')
    async create(@Body() body: { title: string, content: string }): Promise<{ article: Article; status: boolean }> {
        const article = new Article(body.title, body.content);
        await article.save();
        return {
            status: true,
            article: article
        };
    }
}