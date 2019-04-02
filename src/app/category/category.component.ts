import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from './category.model.ts'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryTitle: string = null;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.categoryTitle = urlParameters['title'];
    });
  }

}
