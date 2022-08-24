import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
    PageNotFoundComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    MaterialModule,
    HomeComponent,
    NavigationComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
