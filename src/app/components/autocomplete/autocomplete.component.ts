import { Component, OnInit } from '@angular/core';
import { AutocompleteService } from 'src/app/services/autocomplete.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  schoolName;
  schools = []; 
  filteredSchool = [];
  constructor( private autocompleteServ: AutocompleteService) { }

  ngOnInit() {

    this.autocompleteServ.loadSchools().subscribe((schoolsSnapshot) => {
      this.schools = [];
      schoolsSnapshot.forEach((schoolData: any) => {
        this.schools.push({
          id: schoolData.payload.doc.id,
          data: schoolData.payload.doc.data()
        });
      })
      console.log(this.schools);
    });

  }

  
  /* fetchSchools( keyword: string )  {
    if (this.schools.length === 0) {
      this.autocompleteServ.loadSchools().subscribe( () => {
       this.lookSchool(keyword);
      });
    } else {
     this.lookSchool(keyword);
    }
  }

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
 */
}
