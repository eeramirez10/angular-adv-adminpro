import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso:Number = 20;
  @Input() btnClass:string = "btn btn-info";
  @Output() valorSalida: EventEmitter<Number> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  get getPorcentaje(){
    return `${this.progreso}%`
  }

  cambiarValor(valor){

    this.progreso += valor;

    
    if(this.progreso >= 100 && this.progreso >=0){
       this.progreso = 100;
       return this.valorSalida.emit(this.progreso)
    }

    if( this.progreso <= 0 && this.progreso < 0){
      this.progreso = 0;
      return this.valorSalida.emit(this.progreso)
      
    }

    this.valorSalida.emit(this.progreso)
    
  }

  onChange(nuevoValor){
    
    if(nuevoValor >=100 ){
      nuevoValor = 100;
    }
    if(nuevoValor < 0){
      nuevoValor = 0;
    }

    this.valorSalida.emit(nuevoValor)
  }

}
