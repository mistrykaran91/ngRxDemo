import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'search-details',
  templateUrl: "./search-details.component.html"
})
export class SearchDetailsComponent implements OnInit {

  constructor(private location: Location ) { }

  ngOnInit() {

  }

  goBack() {
    this.location.back();
  }

}
