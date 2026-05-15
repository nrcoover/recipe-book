import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() selectNavigation = new EventEmitter<{ destination: string }>();

  onRecipesClick = () => {
    this.selectNavigation.emit({ destination: 'Recipes' });
  };

  onShoppingListClick = () => {
    this.selectNavigation.emit({ destination: 'Shopping List' });
  };
}
