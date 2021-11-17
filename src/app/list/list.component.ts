import { Component } from '@angular/core';
import { HospedagemService } from '../hospedagem.service';
import { Imovel } from '../imoveis';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  imoveis : Imovel[];

  constructor (private hospedagemService: HospedagemService){}
  ngOnInit () :void{
this.hospedagemService.getImoveis().subscribe((imoveis)=>this.imoveis=imoveis);
console.warn(this.imoveis);
  }


  share() {
    window.alert('Cidade Cadastrado!');
  }
}
