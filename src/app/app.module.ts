import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimateContactoComponent } from './animate-contacto/animate-contacto.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OntimeComponent, SafeHtmlPipe } from './ontime/ontime.component';
import { SidebarContactComponent } from './sidebar-contact/sidebar-contact.component';
import { SidebarComponent } from './ontime/sidebar/sidebar.component';
import { SubmenuComponent } from './ontime/submenu/submenu.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    AnimateContactoComponent,
    HeaderComponent,
    FooterComponent,
    OntimeComponent,
    SidebarContactComponent,
    SidebarComponent,
    SubmenuComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    CarouselModule,
    NgxSkeletonLoaderModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
