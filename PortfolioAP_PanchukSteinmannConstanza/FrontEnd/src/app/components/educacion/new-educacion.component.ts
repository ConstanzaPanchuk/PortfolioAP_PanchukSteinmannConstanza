import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreE : string;
  descripcionE : string;
  imgE : string;

  constructor(private educacionS: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.imgE);
    this.educacionS.save(educacion).subscribe(data => {alert("Educación añadida correctamente"); this.router.navigate(['']);}, err => {alert("Falló"); this.router.navigate(['']);})
  }
}
