
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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

  get(collection: string, start?: number, end?: number) {
    
    if (collection === 'shifts') {
      return this.fs.collection(
        collection, ref =>
        ref.where("date", ">", start)
          .where("date", "<", end))
        .snapshotChanges();
    }
    return this.fs.collection(collection).snapshotChanges();
  }

  update(item: any, collection: string, id: string) {
    console.log(item);
    this.fs
      .collection(collection)
      .doc(id)
      .update(Object.assign({}, item))
      .then(res => { });
  }

  delete(id: string, collection: string) {
    this.fs
      .collection(collection)
      .doc(id)
      .delete()
  }
}
