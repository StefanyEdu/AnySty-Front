import { Component, Injectable, Input, Output } from '@angular/core';
import { Cep } from '../ceps';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class TopBarComponent {

 @Input() ceps : Cep[] | undefined;

public findAll(){
  return this.ceps;
}

}