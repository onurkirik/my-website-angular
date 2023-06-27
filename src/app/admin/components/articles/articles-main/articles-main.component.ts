import { Component } from '@angular/core';
import { Article } from 'src/app/models/Article.model';

@Component({
  selector: 'app-articles-main',
  templateUrl: './articles-main.component.html',
  styleUrls: ['./articles-main.component.scss']
})
export class ArticlesMainComponent {

  selectedArticle!: Article;

  public onArticleSelected(article: Article) {
    this.selectedArticle = article;
  }

  constructor() { }
  ngOnInit(): void { }
}
