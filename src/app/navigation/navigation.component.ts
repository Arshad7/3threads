import { Component, OnInit } from '@angular/core';
// import {jquery} from '../../assets/js/jquery.min.js';
// import jQuery from "jquery";
// import '../../assets/js/main.js'; 

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public toggleState = false;

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.toggleState = !this.toggleState;
  }

}
