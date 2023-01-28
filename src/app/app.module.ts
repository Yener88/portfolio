import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FirstSectionHeaderComponent } from './first-section-header/first-section-header.component';
import { SecondSectionSkillsComponent } from './second-section-skills/second-section-skills.component';
import { ThirdSectionProjectsComponent } from './third-section-projects/third-section-projects.component';
import { FourthSectionAboutComponent } from './fourth-section-about/fourth-section-about.component';
import { FifthSectionContactComponent } from './fifth-section-contact/fifth-section-contact.component';
import { SixthSectionFooterComponent } from './sixth-section-footer/sixth-section-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FirstSectionHeaderComponent,
    SecondSectionSkillsComponent,
    ThirdSectionProjectsComponent,
    FourthSectionAboutComponent,
    FifthSectionContactComponent,
    SixthSectionFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
