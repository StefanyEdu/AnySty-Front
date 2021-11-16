import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imovel } from './imoveis';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  oferta: Oferta[] | undefined;

  getImovel(oferta: string) {
    this.router.navigate(['imoveis', oferta]);
  }

  constructor(private router: Router) {}

  ngOnInit() {}
}
