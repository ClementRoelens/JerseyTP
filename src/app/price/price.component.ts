import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  basicPrice:number=120;
  quantity:number=1;
  totalPrice:number;
  @Input() flockingMode:boolean;
  @Input() badgesNumber:number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    // À chaque fois que le flocking sera activé/désactivé ou que le nombre de badges sélectionnés changera, le prix total sera recalculé
    this.computeTotalPrice();
  }
  
  quantityChange(event) {
    this.quantity = parseInt(event.target.options[event.target.selectedIndex].text);
    this.computeTotalPrice();
  }

  computeTotalPrice(){
    this.basicPrice = (this.flockingMode) ? 130 : 120;
    this.totalPrice = (this.basicPrice + 10*this.badgesNumber)*this.quantity;
  }

}


// ** Composant B **
// - déterminer un total incluant le prix:
//     du maillot (prix unitaire: 120 EUR)
//     de la quantité choisie
//     du flocage (10EUR)
//     des badges choisis (10 EUR par badge)