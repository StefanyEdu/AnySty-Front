import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cep, ceps } from '../ceps';
import { ViacepService } from '../viacep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css'],
})
export class CepComponent implements OnInit {
  cep: Cep | undefined;

  constructor(private route: ActivatedRoute, private viacep: ViacepService) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const numeroCepFromRoute = String(routeParams.get('numeroCep'));

    // Find the product that correspond with the id provided in route.
    //this.cep = ceps.find((cep) => cep.cep === numeroCepFromRoute);
    this.viacep.getCep(numeroCepFromRoute).subscribe(
      cep => this.cep = cep
      );
  }
}
