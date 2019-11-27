import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  denuncias = {
    denuncia: [
      {
        nombre : 'Actos de contrarios a sus funciones u omisiones de personas servidoras públicas',
        codigo : 'T1'
      },
      {
        nombre : 'Deficiencia en servicios y trámites administrativos',
        codigo : 'T2'
      },
      {
        nombre : 'Negligencia',
        codigo : 'T3'
      },
      {
        nombre : 'Maltrato o prepotencia',
        codigo : 'T4'
      }
    ]
  };
  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }

  
  crearDenuncia(codigo: string) {
    this.navCtrl.navigateForward(`denuncia/${codigo}`);
  }
}
