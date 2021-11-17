import { Component } from '@angular/core';
import { imoveis } from '../imoveis';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  imoveis = imoveis;

  share() {
    window.alert('Cidade Cadastrado!');
  }
}
