import { Article } from "./Article.model";

export interface Category {
    id: string,
    name: string,
    articles: Article[]
}