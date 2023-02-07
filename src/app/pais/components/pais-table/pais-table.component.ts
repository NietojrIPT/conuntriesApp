import { Component, Input, OnInit } from '@angular/core';
import { CountriesAppRq } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css'],
})
export class PaisTableComponent {
  @Input() CountrieData: CountriesAppRq[] = [];

  constructor(private paisService: PaisService) {}

  // Search(){
  //   this.validateSearch = false;
  //   this.paisService.getSearchCountrie(this.termmino).subscribe((response) =>{
  //     this.dataCountrie = response;
  //     console.log(this.dataCountrie);
  //   }, (err) => {
  //     this.validateSearch = true;
  //     this.dataCountrie = [];
  //   });
  // }
}
