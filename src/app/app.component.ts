import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  destination = 'Recipes';

  onSelectNavigation = (data: { destination: string }) => {
    console.log(data.destination);
    this.destination = data.destination;
  };
}
