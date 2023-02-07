import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { CountriesAppRq } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent   {

  termino: string = '';
  validateSearch:boolean = false;
  dataCountrie: CountriesAppRq[] = [];

  constructor(private paisService: PaisService) { }


  Search(datSearch: any){

    this.validateSearch = false;
    this.termino = datSearch;

    this.paisService.getSearchCountrie(this.termino).subscribe((response) =>{
      this.dataCountrie = response;
      console.log(this.dataCountrie);
    }, (err) => {
      this.validateSearch = true;
      this.dataCountrie = [];
    });
  }

  searchValue(datSearch: any){
   this.Search(datSearch)
  }


}
