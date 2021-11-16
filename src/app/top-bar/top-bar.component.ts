import { Component, Injectable, Input, Output } from '@angular/core';
import { Imovel } from '../imoveis';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class TopBarComponent {
  @Input() imoveis: Imovel[] | undefined;

  public findAll() {
    return this.imoveis;
  }
}
