import { Component, OnInit } from '@angular/core';
import { Distributor } from './distributor';

@Component({
  selector: 'd',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {
  
  distributor: Distributor;

  constructor() { 
    this.distributor = new Distributor();
  }

  ngOnInit() {
  }

  add($event) {
    console.log($event);
  }

}
