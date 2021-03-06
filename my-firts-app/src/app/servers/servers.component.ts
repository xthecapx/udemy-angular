import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', //select by selector
  //selector: 'app-servers', //select by element
  selector: '.app-servers', //select by class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    console.log(this.servers);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateSeverName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
