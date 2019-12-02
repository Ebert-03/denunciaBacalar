import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

import { DenunciaI } from '../models/denuncia.interface';
import { DbService } from '../service/db.service';

import {ToastController} from '@ionic/angular';


@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.page.html',
  styleUrls: ['./denuncia.page.scss'],
})
export class DenunciaPage implements OnInit {
  codigo: string;

  denuncia: DenunciaI = {
    nombreFun: '',
    nombreDenu: '',
    correo: '',
    descripcion: '',
    tipo: '',
  };

  constructor(private dbServices: DbService, private route: ActivatedRoute, private navCtrl: NavController,
              private loadingController: LoadingController,
              private toastController: ToastController ) { }

  async enviarDenuncia() {
    const loading = await this.loadingController.create({
      message: 'Guardando...'
    });
    await loading.present();
    if (this.denuncia.nombreFun === '') {
      loading.dismiss();

    } else {
      this.dbServices.addTodo(this.denuncia).then(() => {
        loading.dismiss();
        this.denuncia.nombreFun = '';
        this.denuncia.nombreDenu = '';
        this.denuncia.correo = '';
        this.denuncia.descripcion = '';
        this.denuncia.tipo = '';
        this.presentToastWithOptions();
        this.navCtrl.navigateForward('/list');
      });
    }
  }
  ngOnInit() {
    this.denuncia = {
      tipo: this.codigo = this.route.snapshot.paramMap.get('codigo'),
      nombreFun: '',
      nombreDenu: '',
      correo: '',
      descripcion: '',
    };
    // console.log(this.codigo);
  }
  cancelar() {
    this.navCtrl.navigateForward(`list`);
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Guardado :',
      message: 'No. Registro : 0021',
      position: 'bottom',
      buttons: [
          {
          text: 'Aceptar',
          role: 'Cancelar',
          handler: () => {
            // console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}
