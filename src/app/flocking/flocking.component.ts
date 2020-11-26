import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flocking',
  templateUrl: './flocking.component.html',
  styleUrls: ['./flocking.component.css']
})
export class FlockingComponent implements OnInit {

  players : string[] = [
    "SUPERMAN",
    "BATMAN",
    "IRON MAN",
    "SPIDER-MAN",
    "ANT-MAN"
  ];
  // Ces valeurs servent à calculer le prix et modifient également l'affichage, elles sont donc transmises au composant parent
  @Output() flockingMode:EventEmitter<boolean> = new EventEmitter();
  @Output() selectedPlayer:EventEmitter<any> = new EventEmitter();
  @Output() badgesNumber:EventEmitter<number> = new EventEmitter();
  flockingActivated:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  selectedPlayerChange(event){
    let selectedPlayer = {
      "name" : event.target.options[event.target.selectedIndex].text,
      "number" : event.target.selectedIndex+1
    };
    this.selectedPlayer.emit(selectedPlayer);
  }

  activateFlocking(event){
    let select = document.querySelector("select");
    let flockingArea = event.target.parentNode;
    
    select.style.display = "initial";
    this.flockingActivated = true;
    this.flockingMode.emit(true);
    let selectedPlayer = {
      "name": select.options[select.selectedIndex].text,
      "number": select.selectedIndex+1
    };
    this.selectedPlayer.emit(selectedPlayer);
    flockingArea.firstChild.nextElementSibling.classList.add("selected");
    flockingArea.firstChild.classList.remove("selected");
  }

  desactivateFlocking(event){
    let select = document.querySelector("select");
    let flockingArea = event.target.parentNode;

    select.style.display = "none";
    this.flockingActivated = false;
    this.flockingMode.emit(false);
    flockingArea.firstChild.classList.add("selected");
    flockingArea.firstChild.nextElementSibling.classList.remove("selected");
  }

  checkedBadge(event) {
    let badges = document.querySelectorAll("input[type='checkbox']");
    let number = 0;
    badges.forEach((checkbox:any) => {
      if (checkbox.checked) {
        number++;
      }
    });
    this.badgesNumber.emit(number);
  }
}

// ** Composant A **
// - flocker le maillot (de dos, image 3)
// Le clic sur le bouton "Players" affiche un menu déroulant contenant une liste
// de noms de joueurs. La sélection d'un nom provoque son affichage sur le
// maillot ainsi que le numéro associé (Exemple: Buffon => 1).
// Les infos concernant les joueurs (nom, numéro) proviennent d'un service.