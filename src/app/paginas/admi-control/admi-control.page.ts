import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-admi-control',
  templateUrl: './admi-control.page.html',
  styleUrls: ['./admi-control.page.scss'],
})
export class AdmiControlPage implements OnInit {

  constructor(private cerrarSesion : LoginService) { }

  ngOnInit() {
  }
  salir() {
    this.cerrarSesion.salir();
  }

}
