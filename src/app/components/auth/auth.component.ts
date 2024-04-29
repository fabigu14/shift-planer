import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

export interface authResponseData {
  localId: string,
  email: string,
  displayName: string,
  idToken: string,
  registered: boolean,
  refreshToken: string,
  expiresIn: string
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private authService: AuthService,
    ) { }

  login() {
    this.authService.login(this.loginForm.value)
  }

}
