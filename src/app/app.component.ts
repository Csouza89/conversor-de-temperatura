import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="container">
      <h1 class="titulo">Conversor de Temperatura</h1>
      
      <div class="input-container">
        <label>Celsius (°C): </label>
        <input type="number" [(ngModel)]="celsius" (input)="conversorDeCelsius()">
      </div>
      
      <div class="input-container">
        <label>Fahrenheit (°F): </label>
        <input type="number" [(ngModel)]="fahrenheit" (input)="conversorFahrenheit()">
      </div>

      <div class="input-container">
        <label>Kelvin (K): </label>
        <input type="number" [(ngModel)]="kelvin" (input)="conversorKelvin()">
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
      font-family: Times, Times New Roman, serif;
      background-color: lightgreen; 
      border-radius: 25px; 
      text-align: center;
    }

    .titulo {
      color: darkblue;
    }

    .input-container {
      margin: 20px;
      font-weight: 600;
    }

    input {
      padding: 5px;
      border-radius: 10px;
      border: 1px solid #ccc;
    }
  `],
})
export class AppComponent {
  celsius: number = 0;
  fahrenheit: number = 32;
  kelvin: number = 273.15;

  conversorDeCelsius() {
    this.fahrenheit = parseFloat(((this.celsius * 9/5) + 32).toFixed(2));
    this.kelvin = parseFloat((this.celsius + 273.15).toFixed(2));
  }

  conversorFahrenheit() {
    this.celsius = parseFloat(((this.fahrenheit - 32) * 5/9).toFixed(2));
    this.kelvin = parseFloat(((this.fahrenheit + 459.67) * 5/9).toFixed(2));
  }

  conversorKelvin() {
    this.celsius = parseFloat((this.kelvin - 273.15).toFixed(2));
    this.fahrenheit = parseFloat(((this.kelvin * 9/5) - 459.67).toFixed(2));
  }
}
