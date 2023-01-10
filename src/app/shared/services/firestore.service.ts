import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Employe } from 'src/app/models/employe';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private fs: AngularFirestore) { }

  post(data: object, collection: string) {
    this.fs
      .collection(collection)
      .add(Object.assign({}, data))
      .then(res => { })
  }

  get(collection: string) {
    return this.fs.collection(collection).snapshotChanges();
  }

  update(item: Employe, collection: string, id: string) {
    console.log(item);
    this.fs
      .collection(collection)
      .doc(id)
      .update(Object.assign({}, item))
      .then(res => { });
  }

  delete(id: string, collection: string){
    this.fs
    .collection(collection)
    .doc(id)
    .delete()
  }
}
