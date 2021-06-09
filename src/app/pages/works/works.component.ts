import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from 'src/app/servicies/datos.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  trabajosWeb : Array<Object> = [ ]
  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private datos : DatosService
  ) {
    this.trabajosWeb = datos.trabajosWeb
   }

  ngOnInit(): void {
  }

}
