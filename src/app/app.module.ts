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
import {HeadingWidgetComponent} from './heading-widget/heading-widget.component';
import {ParagraphWidgetComponent} from './paragraph-widget/paragraph-widget.component';
import {LinkWidgetComponent} from './link-widget/link-widget.component';
import {ImageWidgetComponent} from './image-widget/image-widget.component';
import {ListWidgetComponent} from './list-widget/list-widget.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {UserService} from './services/service.user';
import {FormsModule} from '@angular/forms';
import {SectionService} from './services/service.section';
import { SectionListComponent } from './section-list/section-list.component';
import { AdminEditorComponent } from './admin-editor/admin-editor.component';

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
    ListWidgetComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SectionListComponent,
    AdminEditorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    routing
  ],
  providers: [
    CourseService,
    ModuleService,
    LessonService,
    WidgetService,
    UserService,
    SectionService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
