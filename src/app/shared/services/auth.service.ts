import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { authResponseData } from 'src/app/components/auth/auth.component';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  signInUrl: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBMcfoTTKcxX8Tlvuj5KSB2eZXSlq0Bkoc'
  user = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient,
    public auth: AngularFireAuth,
    private router: Router) { }

  login(value: any) {
    this.auth
      .signInWithEmailAndPassword(value.email, value.password)
      .then(resData => {
        console.log(resData.user);
        this.router.navigate(['/shiftplan'])
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  logout() {
    this.auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log('user is signed out');
        this.router.navigate([''])
      }).catch((error) => {
        // An error happened.
      });
  }

}
