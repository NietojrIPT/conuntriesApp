import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesAppRq } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private SERVICE_URL: string = 'https://restcountries.com/v3.1/';

  constructor( private http: HttpClient) { }


  getSearchCountriee(request: string){
    const url = `${this.SERVICE_URL}name/${request}`
    this.http.get(url)
  }

  getSearchCountrie(nameCountrie: string): Observable<CountriesAppRq[]> {
    let serviceUrl = this.SERVICE_URL + 'name/' + nameCountrie;
    return this.http.get<CountriesAppRq[]>(serviceUrl);
  }




}
