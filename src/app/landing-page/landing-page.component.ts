import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.model';
import { categories } from '../category-data.ts';
import { PostService } from '../post.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [PostService]
})
export class LandingPageComponent implements OnInit {
  categoryList: Category[] = categories;
  posts: Post[];
  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    console.log("posts: ", this.posts);
  }
  goToCategoryPage(clickedCategory: Category){
    this.router.navigate(['categories', clickedCategory.title])
  }
}
