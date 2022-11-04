import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

import {MatTabsModule} from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OverviewComponent } from './overview/overview.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ParticipatedProjectsComponent } from './participated-projects/participated-projects.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ChatComponent } from './chat/chat.component';
import { PopularProjectComponent } from './popular-project/popular-project.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateNewComponent,
    LoginComponent,
    PageNotFoundComponent,
    OverviewComponent,
    MyProjectsComponent,
    ParticipatedProjectsComponent,
    AllProjectsComponent,
    ChatComponent,
    PopularProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
