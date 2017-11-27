import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadparentComponent } from './lazyloadparent/lazyloadparent.component';
import { LazyloadchildComponent } from './lazyloadchild/lazyloadchild.component';


import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'load-me', component: LazyloadparentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LazyloadparentComponent, LazyloadchildComponent]
})
export class LazyloadmoduleModule { }
