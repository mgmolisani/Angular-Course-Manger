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
import {WidgetListComponent} from './widget-list/widget-list.component';
import {WidgetService} from './services/service.widget';
import { HeadingWidgetComponent } from './heading-widget/heading-widget.component';
import { ParagraphWidgetComponent } from './paragraph-widget/paragraph-widget.component';
import { LinkWidgetComponent } from './link-widget/link-widget.component';
import { ImageWidgetComponent } from './image-widget/image-widget.component';
import { ListWidgetComponent } from './list-widget/list-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseGridComponent,
    ModuleListComponent,
    CourseViewerComponent,
    LessonTabsComponent,
    WidgetListComponent,
    HeadingWidgetComponent,
    ParagraphWidgetComponent,
    LinkWidgetComponent,
    ImageWidgetComponent,
    ListWidgetComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    CourseService,
    ModuleService,
    LessonService,
    WidgetService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
