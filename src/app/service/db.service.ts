import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { DenunciaI } from '../models/denuncia.interface';
import { Action } from 'rxjs/internal/scheduler/Action';



@Injectable({
  providedIn: 'root'
})

export class DbService {

  private collection: AngularFirestoreCollection<DenunciaI>;
  private todos: Observable<DenunciaI[]>;

  constructor(db: AngularFirestore) {
    this.collection = db.collection<DenunciaI>('denuncias');
    this.todos = this.collection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };
        });
      }
    ));
  }
  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.collection.doc<DenunciaI>(id).valueChanges();
  }

  updateTodo(todo: DenunciaI, id: string) {
    return this.collection.doc(id).update(todo);
  }

  addTodo(todo: DenunciaI) {
    return this.collection.add(todo);
  }

  removeTodo(id: string) {
    return this.collection.doc(id).delete();
  }
}