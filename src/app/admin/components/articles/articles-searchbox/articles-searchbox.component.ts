import { Component, EventEmitter, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Article } from 'src/app/models/Article.model';
import { MatPaginator } from '@angular/material/paginator';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles-searchbox',
  templateUrl: './articles-searchbox.component.html',
  styleUrls: ['./articles-searchbox.component.scss']
})
export class ArticlesSearchboxComponent {

  _articles: Article[] | undefined;
  @Output() articleSelected: EventEmitter<Article> = new EventEmitter<Article>();


  _displayedColumns: string[] = [
    'title',
    'content',
    'createdDate',
    'updatedDate',
    'author',
    'category'];

  _dataSource: MatTableDataSource<Article> = new MatTableDataSource<Article>();
  @ViewChild(MatPaginator) _paginator!: MatPaginator;

  constructor(
    private _articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  public getAllArticles() {
    this._articleService.getAll().subscribe(
      (success) => {
        this._articles = success;
        this._dataSource = new MatTableDataSource<Article>(this._articles);
        this._dataSource.paginator = this._paginator;
      },
      (err) => {
        console.log("Something get wrong");
      });
  }

  public selectArticle(article: Article) {
    this.articleSelected.emit(article);
  }
}
