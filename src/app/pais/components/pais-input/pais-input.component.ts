import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent  {
@Output() valueSearch:EventEmitter<string> = new EventEmitter();

termino: string = '';

Search(){
  this.valueSearch.emit(this.termino)
  this.termino = '';
}


}
