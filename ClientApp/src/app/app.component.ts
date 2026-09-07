import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkillGraphicComponent } from './skill-graphic.component/skill-graphic.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MenuDropdownComponent } from './menu-dropdown/menu-dropdown.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterModule, SkillGraphicComponent, FormsModule, HeaderComponent, MenuDropdownComponent],
  standalone: true
})
export class AppComponent {
  title = 'app';
}
