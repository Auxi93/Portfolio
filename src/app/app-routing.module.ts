import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { WorksComponent } from './pages/works/works.component';


const routes: Routes = [
 {path: '', component : HomeComponent},
 {path: 'works', component : WorksComponent },
 {path: 'skills', component: SkillsComponent},
 {path: 'about', component: AboutComponent},
 {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
