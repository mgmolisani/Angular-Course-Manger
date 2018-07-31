import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/service.user';
import {User} from '../models/model.user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: '';
  password: '';
  verifyPassword: '';

  constructor(private router: Router,
              private service: UserService) {
  }

  register() {
    if (this.username && this.password) {
      if (this.password === this.verifyPassword) {
        const user: User = {
          username: this.username,
          password: this.password
        };
        this.service
          .register(user, () => {
            this.router.navigate(['profile']);
          });
      } else {
        alert('Passwords do not match.');
      }
    } else {
      alert('All fields are required');
    }
  }

  ngOnInit() {
  }

}
