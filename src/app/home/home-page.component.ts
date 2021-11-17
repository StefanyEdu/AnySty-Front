import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imovel } from '../imoveis';
import{FormBuilder}from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  imoveis: Imovel[] | undefined;

 getImovel(oferta: string) {
    this.router.navigate(['imoveis', cidadeOf]);
  }
 
  constructor(private router: Router,
              private formBuilder: FormBuilder ) {}
pesquisaForm=this.formBuilder.group({
  cidade:'',dataInicio:'',dataFim:'', numPessoas:''
})
  ngOnInit() {}
}
