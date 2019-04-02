import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent }  from './landing-page/landing-page.component';
import { CategoryComponent } from './category/category.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'categories/:title',
    component: CategoryComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
