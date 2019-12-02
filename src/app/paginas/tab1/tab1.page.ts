import { Component, OnInit } from '@angular/core';
import { DenunciaI } from '../../models/denuncia.interface';
import { DbService } from '../../service/db.service';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  todo: DenunciaI[];

  constructor(private db: DbService, ) { }

  ngOnInit() {
    this.db.getTodos().subscribe(res => {
      this.todo = res;
    });
  }

}
