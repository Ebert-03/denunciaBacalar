import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
  email: string;
  password: string;
  constructor(private loginService: LoginService,  public router: Router) { }

  ngOnInit() {
  }

  loginAdmi() {
    this.loginService.iniciarSesion(this.email, this.password).then( res => {
      this.router.navigate(['/admi-control']);
    }).catch(err => alert('los datos son incorrectos o no existe el usuario'));
  }

}
