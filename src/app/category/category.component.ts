import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from './category.model.ts';
import { Post } from './post.model';
import { PostService } from '../post.service';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [PostService]
})
export class CategoryComponent implements OnInit {
  categoryTitle: string = null;
  postsToDisplay: Post[];

  constructor(private route: ActivatedRoute, private location: Location, private postService: PostService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.categoryTitle = urlParameters['title'];
    });
    this.postsToDisplay = this.postService.getPostByCat(this.categoryTitle);
  }
}
