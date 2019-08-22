import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  schools = [];
  filteredSchool = [];


  constructor( private firestore: AngularFirestore ) {
   }

   public loadSchools() {

    return this.firestore.collection('Schools').snapshotChanges();

   }

  /*  fetchSchools( keyword: string )  {
    if (this.schools.length === 0) {
      this.loadSchools().then( () => {
       this.lookSchool(keyword);
      });
    } else {
     this.lookSchool(keyword);
    }
  } */

  private lookSchool( keyword: string ) {

   this.filteredSchool = [];

   keyword = keyword.toLocaleLowerCase();

   this.schools.forEach( school => {

     const titleLower = school.toLocaleLowerCase()

     if ( titleLower.indexOf( keyword ) >= 0 ) {
       this.filteredSchool.push( school );

     }
   });

 }

}
