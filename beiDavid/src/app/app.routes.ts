import { Routes } from '@angular/router';
import { ComponentWebentwicklung } from './component-webentwicklung/component-webentwicklung';
import { App } from './app';
import { ComponentFullnavigation } from './component-fullnavigation/component-fullnavigation';

export const routes: Routes = [
  { path: '', component: ComponentFullnavigation },
  { path: 'webentwicklung', component: ComponentWebentwicklung }
];
