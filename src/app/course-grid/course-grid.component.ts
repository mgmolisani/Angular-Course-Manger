import {Component, OnInit} from '@angular/core';
import {CourseService} from '../services/service.course';
import {Course} from '../models/model.course';
import {SectionService} from '../services/service.section';
import {UserService} from '../services/service.user';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {
  courses: Course[] = [];
  enrolled: number[] = [];
  role = 'Guest';

  constructor(private courseService: CourseService,
              private sectionService: SectionService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.sectionService.findSectionsForStudent(sections => {
      this.enrolled = sections.map(section => {
        return section.courseId;
      });
    }).then(() => {
      this.courseService.findAllCourses(courses => {
        const myCourses = courses.filter(course => {
          return this.enrolled.includes(course.id);
        });
        const otherCourses = courses.filter(course => {
          return !this.enrolled.includes(course.id);
        });
        this.courses = [...myCourses, ...otherCourses];
      });
    }, () => {
      this.courseService.findAllCourses(courses => {
        this.courses = courses;
      });
    });
    this.userService
      .getProfile(user => {
        this.role = user.role || 'Guest';
      });
  }
}
