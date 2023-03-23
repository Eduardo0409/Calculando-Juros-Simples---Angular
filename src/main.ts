import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: `./main.html` ,
})
export class App {
  valor: number;
  rate: number;
  meses: number;


  getInterests(){
    return this.valor * (1 + this.rate * this.meses);
  }
}
bootstrapApplication(App); 
