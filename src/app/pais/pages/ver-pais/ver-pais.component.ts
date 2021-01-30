import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../models/pais.model';
import { switchMap, tap } from 'rxjs/operators';
switchMap

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;
  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }


  //SwitchMap = es un operador de RXJS que permite recibir un observable y retornar otro observable
  //Tap = es un operador de RXJS que dispara un efecto secundario
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   this.paisService.buscarPaisPorCodigo(id).subscribe(pais => {
    //     console.log(pais);
    //   })
    // });

    this.activatedRoute.params.pipe(
      switchMap((parametroURL => this.paisService.buscarPaisPorCodigo(parametroURL.id))),
      tap(paisT=>console.log(paisT))
    ).subscribe(pais => {
      this.pais = pais;
    })
  }

}
