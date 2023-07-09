import { Component, EventEmitter, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Article } from 'src/app/models/Article.model';
import { MatPaginator } from '@angular/material/paginator';
import { ArticleService } from 'src/app/services/article.service';
import { firstValueFrom } from 'rxjs';

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
    'category',
    'delete'];

  _dataSource: MatTableDataSource<Article> = new MatTableDataSource<Article>();
  @ViewChild(MatPaginator) _paginator!: MatPaginator;

  constructor(
    private _articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  public async getAllArticles() {
    try {
      const data = await firstValueFrom(this._articleService.getAll());

      this._articles = data;
        this._dataSource = new MatTableDataSource<Article>(this._articles);
        this._dataSource.paginator = this._paginator;
    } catch (error) {
      console.log("Something get wrong");
    }
  }

  public selectArticle(article: Article) {
    this.articleSelected.emit(article);
  }

  public deleteCategory(article: Article) {
    this._articleService.deleteArticle(article.id!).subscribe(
      (success) => {
        console.log("Success");
        this.getAllArticles()
      }
    );
  }
}
