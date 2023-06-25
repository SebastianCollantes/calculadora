import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  actualNumber: number;
  result: number;

  constructor(){
    this.actualNumber = 0;
    this.result = 0;
  }

  ngOnInit(): void {
  }
  addNumber(numero: number){
    this.actualNumber = this.actualNumber * 10 + numero;
    this.refreshResult();
  }
  plusNumber(){
    this.result += this.actualNumber;
    this.actualNumber = 0;
    this.refreshResult();
  }
  minusNumber(){
    
  }
  deleteInput(){
    this.actualNumber = 0;
    this.result = 0;
    this.refreshResult();
  }
  calculate(){
    this.result += this.actualNumber;
    this.actualNumber = this.result;
    this.refreshResult();
  }
  refreshResult(){
    var inputField = document.getElementById('inputField');
    if(inputField instanceof HTMLInputElement){
      inputField.value = this.actualNumber.toString();
    }
  }
}
