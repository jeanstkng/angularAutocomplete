import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {


  constructor( private firestore: AngularFirestore ) {
   }

  public loadSchools() {

  return this.firestore.collection('Schools').snapshotChanges();

  }


}
