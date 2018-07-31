import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/service.user';
import {SectionService} from '../services/service.section';
import {Router} from '@angular/router';
import {User} from '../models/model.user';
import {Section} from '../models/model.section';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService,
              private sectionService: SectionService,
              private router: Router) {
  }

  user: User = new User;
  sections: Section[] = [];

  update() {
    this.userService
      .updateUser(this.user,
        () => alert('User has successfully been updated.'));
  }

  logout() {
    this.userService
      .logout(() => {
        this.router.navigate(['login']);
      });
  }

  ngOnInit() {
    this.userService
      .getProfile(user => this.user = user);

    this.sectionService
      .findSectionsForStudent(sections => this.sections = sections);
  }

}
