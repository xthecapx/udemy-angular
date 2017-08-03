import { Component } from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  private _serverId: number = 10;
  serverStatus: string = "offline";

  getServerStatus() {
    return this.serverStatus;
  }

  get serverId() {
    return this._serverId;
  }
}