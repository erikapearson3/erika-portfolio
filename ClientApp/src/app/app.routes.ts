import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full', title: 'Home | Erika Thompson' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects | Erika Thompson' },
  { path: 'contact', component: ContactComponent, title: 'Contact | Erika Thompson' },
  { path: '**', redirectTo: '' }
];
