import { Component, OnInit } from '@angular/core';
import { AutocompleteService } from 'src/app/services/autocomplete.service';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  public cats = [];

  constructor( private autocompleteServ: AutocompleteService) { }

  ngOnInit() {

    this.autocompleteServ.loadSchools().subscribe((catsSnapshot) => {
      this.cats = [];
      catsSnapshot.forEach((catData: any) => {
        this.cats.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
      })
    });

    console.log(this.cats);

  }

}
