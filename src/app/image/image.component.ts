import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() flockingMode:boolean;
  @Input() selectedPlayer:any;
  images:string[] = [
    "assets/images/1.jpg",
    "assets/images/2.jpg",
    "assets/images/3.jpg",
    "assets/images/4.jpg"
  ];
  selectedImage:string = "assets/images/1.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    let large = document.querySelector("img");
    let text = document.querySelector("#flocking h1");
    let number = document.querySelector("#flocking h2")
    if (this.flockingMode) {
      this.onImageChange(this.images[2]);
      text.innerHTML = this.selectedPlayer.name;
      number.innerHTML = this.selectedPlayer.number.toString();
    }
    else {
      this.onImageChange(this.images[0]);
      text.innerHTML = "";
      number.innerHTML = "";
    }
  }

  onImageChange(path) {
    this.selectedImage = path;
    let flocking = document.getElementById("flocking");
    flocking.style.display = (this.selectedImage.includes("assets/images/3.jpg")) ? "initial" : "none";
  }
}

// ** Composant C **
// - d'afficher une image en grand format, à partir d'un clic sur une miniature
//  -->