import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  title = [
    'Actos de contrarios a sus funciones u omisiones de personas servidoras públicas',
    'Deficiencia en servicios y trámites administrativos',
    'Negligencia',
    'Maltrato o prepotencia'
  ];
  constructor() { }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
