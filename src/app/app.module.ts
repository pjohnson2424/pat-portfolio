import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Content1Component } from './content1/content1.component';
import { MystoryComponent } from './mystory/mystory.component';
import { ContactComponent } from './contact/contact.component';
import { DesignDevelopComponent } from './design-develop/design-develop.component';
import { PhotoVideoComponent } from './photo-video/photo-video.component';
import { VideoComponent } from './video/video.component';
import { DevelopmentComponent } from './development/development.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Content1Component,
    MystoryComponent,
    ContactComponent,
    DesignDevelopComponent,
    PhotoVideoComponent,
    VideoComponent,
    DevelopmentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
