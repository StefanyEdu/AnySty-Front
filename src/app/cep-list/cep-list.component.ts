import { Component } from '@angular/core';

import { Imovel } from './imoveis';

@Component({
  selector: 'app-cep-list',
  templateUrl: './cep-list.component.html',
  styleUrls: ['./cep-list.component.css'],
})
export class CepListComponent {
  ceps = ceps;

  share() {
    window.alert('Cep Cadastrado!');
  }
}
