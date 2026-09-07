import { Component } from '@angular/core';
import { MenuDropdownComponent } from '../menu-dropdown/menu-dropdown.component';

@Component({
  selector: 'app-header',
  imports: [MenuDropdownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

}
