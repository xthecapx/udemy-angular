import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', //select by selector
  //selector: 'app-servers', //select by element
  selector: '.app-servers', //select by class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
