import { Injectable } from '@angular/core';
import { Imovel } from './imoveis';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ViacepService {
  constructor(private http: HttpClient) {}

  getCep(cep: string) {
    return this.http.get<Imovel>('./imoveis.ts');
    /*return this.http.get<Cep>('https://viacep.com.br/ws/'+cep+'/json/');*/
    //return this.http.get<Cep>('https://boiling-inlet-94899.herokuapp.com/api/ceps/'+cep);
  }
}