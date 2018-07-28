import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {HomeComponent} from './home/home.component';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {CourseService} from './services/service.course';
import {ModuleListComponent} from './module-list/module-list.component';
import {ModuleService} from './services/service.module';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {LessonService} from './services/service.lesson';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseGridComponent,
    ModuleListComponent,
    CourseViewerComponent,
    LessonTabsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    CourseService,
    ModuleService,
    LessonService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
