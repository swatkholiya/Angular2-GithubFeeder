import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  styleUrls: ['./about-us.component.css'],
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("abt us....");
  }
}
