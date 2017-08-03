import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayText: boolean =  false;
  counter: number = 0;
  array = [];
  myClass = false;

  updateText() {
    this.displayText = !this.displayText;
    this.array.push(this.counter);
    this.counter++;
  }

  getColor(n) {
    if (n > 4) {
      this.myClass = true;
      return 'blue'
    } else {
      return false;
    }
  }

}
