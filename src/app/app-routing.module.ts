import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { CVComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [ 
  { path: 'Home', component:AccueilComponent, title:"Accueil"},
  { path: 'Presentation', component:PresentationComponent, title: "Pourquoi moi?"},
  { path: 'Contact', component: ContactComponent, title: "Contactez Moi"},
  { path: 'MyCV', component: CVComponent, title: "Mon CV"},
  { path: 'PastProjects', component: MyProjectComponent, title: "Mes Projets Passés"},
  
//handleing the note found and default paths
  
  { path: 'NotFound', component: NotFoundComponent, pathMatch:'full'},
  { path: '', redirectTo:'Home', pathMatch:'full'},
  { path: '**', component: NotFoundComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
}
