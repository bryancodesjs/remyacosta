import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  libros = [
    {
      id: 1,
      titulo: "50 sombras de gray",
      autor: "plinio mejia",
      ano: 2009
    },
    {
      id: 2,
      titulo: "Juego de Tronos",
      autor: "plinio george",
      ano: 1976
    },
    {
      id: 3,
      titulo: "la milla extra",
      autor: "plinio mejia",
      ano: 2021
    },
    {
      id: 4,
      titulo: "una noche con miguel",
      autor: "darling moreno",
      ano: 2020
    }
  ]
}
