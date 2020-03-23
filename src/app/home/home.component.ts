import { Component, OnInit } from '@angular/core';
import {ApiconsumeService } from '../shared/services/apiconsume.service';

// import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products;
  public testcolor;

  constructor(private apiconsumeservice:ApiconsumeService) { }

  ngOnInit() {


    this.apiconsumeservice.products().subscribe(data=> {
      // console.log(data);
      let prod = data[6];
      this.products = prod.product_img[0];
      // console.log(this.products);
    })
    // $.getScript('../../assets/js/main.js');
  }


  color(cc){
    let color = cc
   console.log(color);
  }
}
