import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from 'src/app/servicies/datos.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {
  
  @Input() seccion : string = undefined

  VeloBlanco = false

  cabecera : Array<Object> = []
  
  constructor(
    private activatedRoute : ActivatedRoute,
    private router         : Router,
    private datos          : DatosService
  ) {
    this.cabecera = datos.cabecera
   }

  ngOnInit(): void {
  }
  change_icon:boolean =false; 

  @HostListener("document:scroll")

  ponerScroll (){
    if( document.body.scrollTop > 100 || document.documentElement.scrollTop >= 100){
      this.change_icon = true;
    }
    else{
      this.change_icon = false; 
    }
  }
  
  ponerVeloBlanco (){
    this.VeloBlanco = !this.VeloBlanco
  }

  viajar(x){
    this.router.navigate([x])
  }
  esActivo(x){
    if( x === this.router.url ){
      return true
    }else{
      return false
    }
  }
}
