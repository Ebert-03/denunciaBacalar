import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Route } from '@angular/compiler/src/core';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private Alogin: AngularFireAuth, private router: Router) { }

  iniciarSesion(email: string, password: string) {
    return new Promise((resolve, rejected) => {
      this.Alogin.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  salir() {
    this.Alogin.auth.signOut().then(() => {
      this.router.navigate(['/pagina2']);
    });
  }
}
