import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.model';
import { categories } from '../category-data.ts';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  categoryList: Category[] = categories;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log("cats: ", this.categoryList);
  }
  goToCategoryPage(clickedCategory: Category){
    this.router.navigate(['categories', clickedCategory.title])
  }
}
