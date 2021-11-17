import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{HospedagemService} from '../hospedagem.service'


@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css'],
})
export class Ofertas implements OnInit {
  oferta: Ofertas[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private hospedagem: HospedagemService
  ) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const cidadeOfFromRoute = String(routeParams.get('cidadeOf'));

    //this.oferta = imoveis.find((oferta) => oferta.oferta === cidadeOfFromRoute);
    this.hospedagem
      .getImovel(cidadeOfFromRoute)
      .subscribe((oferta) => (this.oferta = this.oferta));
  }
}
