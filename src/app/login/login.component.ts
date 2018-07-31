import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/service.user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: '';
  password: '';

  constructor(private router: Router,
              private service: UserService) {
  }

  login() {
    const credentials = {
      username: this.username,
      password: this.password
    };
    this.service
      .login(credentials, () => {
        this.router.navigate(['profile']);
      });
  }

  ngOnInit() {
  }

}
