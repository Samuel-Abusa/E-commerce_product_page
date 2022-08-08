import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigateComponent } from './navigate/navigate.component';
import { SlideMenuComponent } from './navigate/slide-menu/slide-menu.component';
import { HomeComponent } from './home/home.component';
import { ShowNavDirective } from './navigate/show-nav.directive';
import { SneakerImageComponent } from './home/sneaker-image/sneaker-image.component';
import { SneakerCopyComponent } from './home/sneaker-copy/sneaker-copy.component';
import { ImageModalComponent } from './home/sneaker-image/image-modal/image-modal.component';
import { ImageThumbComponent } from './home/sneaker-image/image-thumb/image-thumb.component';
import { SwitchButtonsComponent } from './home/sneaker-image/switch-buttons/switch-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    SlideMenuComponent,
    HomeComponent,
    ShowNavDirective,
    SneakerImageComponent,
    SneakerCopyComponent,
    ImageModalComponent,
    ImageThumbComponent,
    SwitchButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
