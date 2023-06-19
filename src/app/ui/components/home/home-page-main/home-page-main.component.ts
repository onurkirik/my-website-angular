import { Component } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home-page-main',
  templateUrl: './home-page-main.component.html',
  styleUrls: ['./home-page-main.component.scss']
})
export class HomePageMainComponent {

  data: any;
  id: string = "A44CE742-19C4-4C85-B8F1-8A2F35F9CEB4";

  constructor(
    private _articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this._articleService.getById(this.id).subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }
}
