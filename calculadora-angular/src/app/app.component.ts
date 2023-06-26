import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  actualNumber: number;
  result: number;
  operator: string;

  constructor() {
    this.actualNumber = 0;
    this.result = 0;
    this.operator = '';
  }

  ngOnInit(): void {
  }

  addNumber(numero: number) {
    this.actualNumber = this.actualNumber * 10 + numero;
    this.refreshResult();
  }

  setOperator(operator: string) {
    this.operator = operator;
    this.result = this.actualNumber;
    this.actualNumber = 0;
    this.refreshResult();
  }

  calculate() {
    if (this.operator === '+') {
      this.result += this.actualNumber;
    } else if (this.operator === '-') {
      this.result -= this.actualNumber;
    } else if (this.operator === '*') {
      this.result *= this.actualNumber;
    } else if (this.operator === '/') {
      if (this.actualNumber === 0) {
        this.result = NaN;
      } else {
        this.result /= this.actualNumber;
      }
    } else if(this.operator === '%'){
      this.result = this.result * (this.actualNumber / 100);
    }

    this.operator = '';
    this.actualNumber = this.result;
    this.refreshResult();
  }

  deleteInput() {
    this.actualNumber = 0;
    this.result = 0;
    this.operator = '';
    this.refreshResult();
  }

  refreshResult() {
    var inputField = document.getElementById('inputField');
    if (inputField instanceof HTMLInputElement) {
      inputField.value = this.actualNumber.toString();
    }
  }
}
