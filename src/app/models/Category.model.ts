import { Article } from "./Article.model";

export interface Category {
    name: string,
    articles: Article[]
}