import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserModule, Title } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {DemoMaterialModule} from './material-module';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './app/navbar/navbar.component';
import { NavbarContentsComponent } from './app/navbar-contents/navbar-contents';
import { ContentsComponent } from './app/contents/contents.component';
import { SubContentComponent } from './app/sub-content/sub-content.component';
import { Page1Component } from './app/page1/page1.component';
import { Page2Component } from './app/page2/page2.component';
import { Page3Component } from './app/page3/page3.component';
import { PageWithCardsComponent } from './app/page-with-cards/page-with-cards.component';

@NgModule({
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [NavbarComponent],
  declarations: [    
    NavbarComponent,
    SubContentComponent,
    NavbarContentsComponent,
    ContentsComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    PageWithCardsComponent
    ],
  bootstrap: [NavbarComponent],
  providers: [Title]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */