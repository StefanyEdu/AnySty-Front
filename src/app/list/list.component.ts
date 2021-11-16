import { Component } from '@angular/core';
import { imoveis } from '../imoveis';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./ist.component.css'],
})
export class CepListComponent {
  imoveis = imoveis;

  share() {
    window.alert('Cidade Cadastrado!');
  }
}
