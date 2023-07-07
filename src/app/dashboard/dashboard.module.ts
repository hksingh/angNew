import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },  
  {
    path:':id', component:FaqComponent
  } 
];

@NgModule({
  declarations: [
    HomeComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
