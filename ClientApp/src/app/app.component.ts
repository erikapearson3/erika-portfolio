import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkillGraphicComponent } from './skill-graphic.component/skill-graphic.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterModule, SkillGraphicComponent, HeaderComponent],
  standalone: true
})
export class AppComponent {
  title = 'TechSavvE';
}
