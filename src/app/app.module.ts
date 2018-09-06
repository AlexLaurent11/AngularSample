import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ListComponent } from './list/list.component';
import { CommentsComponent } from './comments/comments.component'
import { PhotosComponent } from './photos/photos.component';

import { ListService } from './list.service'
import { CommentsService } from './comments.service';
import { PhotosService } from './photos.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListComponent,
    CommentsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ListService,
    CommentsService,
    PhotosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
