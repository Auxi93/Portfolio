import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from 'src/app/servicies/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  listaHabilidades : Array<Object> = []

  constructor(
    private activitatedRoute: ActivatedRoute,
    private router          : Router,
    private datos           : DatosService
  ) {
    this.listaHabilidades = datos.listaHabilidades
   }

  ngOnInit(): void {
  }

}
