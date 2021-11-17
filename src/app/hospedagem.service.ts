import { Injectable } from '@angular/core';
import { Imovel } from './imoveis';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HospedagemService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:8080/hospedagem/';

  getImovel(imoveis: string) {
    return this.http.get<Imovel>('http://localhost:8080/hospedagem/');
  }
  getImoveis(): Observable<Imovel[]> {
    return this.http.get<Imovel[]>(this.url);
  }
  /*return this.http.get<Cep>('https://viacep.com.br/ws/'+cep+'/json/');*/
  //return this.http.get<Cep>('https://boiling-inlet-94899.herokuapp.com/api/ceps/'+cep);
}
