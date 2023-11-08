import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CVComponent } from './cv/cv.component';
import { PresentationComponent } from './presentation/presentation.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CVComponent,
    PresentationComponent,
    MyProjectComponent,
    ContactComponent,
    AccueilComponent,
    FooterComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    //NavBarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
