import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import {ToastController} from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  constructor(private loginService: LoginService,  public router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  loginAdmi() {
    this.loginService.iniciarSesion(this.email, this.password).then( res => {
      this.router.navigate(['/admi-control']);
    }).catch(err =>  this.presentToastWithOptions() );
  }

  // async presentToast() {
  //   const toast = await this.toastController.create({
  //     message: 'Your settings have been saved.',
  //     duration: 2000
  //   });
  //   toast.present();
  // }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Error ;',
      message: 'Usuario o Contraseña',
      position: 'bottom',
      buttons: [
          {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }


}
