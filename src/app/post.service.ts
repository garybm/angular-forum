import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { posts } from './post-data'



@Injectable()
export class PostService {

  constructor() { }

  getPosts() {
    return posts;
  }
  getPostByCat(postCat: string) {
    const displayPosts = [];
    for(let i = 0; i <= posts.length - 1; i++ ) {
      if (posts[i].category === postCat) {
        displayPosts.push(posts[i]);
      }
    }
    return displayPosts;
  }
}
