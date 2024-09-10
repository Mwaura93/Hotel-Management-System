import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './app-layout/header/header.component';
import { FooterComponent } from './app-layout/footer/footer.component';
import { SideBarComponent } from './app-layout/side-bar/side-bar.component';
import { PageLoaderComponent } from './app-layout/page-loader/page-loader.component';
import { RightSideBarComponent } from './app-layout/right-side-bar/right-side-bar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    PageLoaderComponent,
    RightSideBarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
