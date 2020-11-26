import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JerseyTP';
  //Ces 3 valeurs sont envoyées par le composant flocking afin d'être ensuite transmises aux composants Price et Image
  flockingMode:boolean;
  selectedPlayer:any;
  badgesNumber:number=0;
  
  flockingChange(event) {
  this.flockingMode = event;
  }

  selectedPlayerChange(event) {
    this.selectedPlayer = event;
  }

  badgesNumberChange(event) {
    this.badgesNumber = event;
  }
}
