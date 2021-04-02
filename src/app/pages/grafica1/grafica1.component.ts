import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  title1:String = "Ventas"
  breadCrumbtitle:String = "Graficas"

  label: String[]= ['Mexico','Monterrey','Mexicali']
  data: number[]=[50,30,10]

  tuvansa: any[] = [
    {
      title: "Ventas Sucursal",
      lables: ['Mexico','Monterrey','Mexicali'],
      data:[5621,2554,236]
    },
    {
      title: "Ventas Vendedor",
      lables: ['Luis','Alma','Navarro','Jorge','Isabel'],
      data:[10,20,30,200,100]
    },
    {
      title:'Compras',
      lables: ['TSC','TCC','Bridas','Conexiones','Valvulas'],
      data: [25,658,36,98,8]
    }
  ]
  constructor() { 

  }

  ngOnInit(): void {
  }

}
