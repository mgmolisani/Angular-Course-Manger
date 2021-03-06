import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {SectionListComponent} from './section-list/section-list.component';
import {AdminEditorComponent} from './admin-editor/admin-editor.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'course/:courseId', component: CourseViewerComponent},
  {path: 'course/:courseId/admin', component: AdminEditorComponent},
  {path: 'course/:courseId/section', component: SectionListComponent},
  {path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent},
  {path: '**', component: HomeComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
