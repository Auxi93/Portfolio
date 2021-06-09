import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-minicabecera',
  templateUrl: './minicabecera.component.html',
  styleUrls: ['./minicabecera.component.scss']
})
export class MinicabeceraComponent implements OnInit {

  @Input() seccion : string = undefined
  
  @Input() titulo : string = 'Valor por defecto'
 
  fondo = false
  constructor() { }

  ngOnInit(): void {
  }

}
