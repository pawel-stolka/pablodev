import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HomeComponent } from '../shared/components/home/home.component';
// import { NavigationComponent } from './navigation/navigation.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    // HomeComponent,
    // NavigationComponent,
    // PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    // HomeComponent,
    // NavigationComponent,
    // PageNotFoundComponent
  ]
})
export class CoreModule { }
