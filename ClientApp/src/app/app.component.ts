import { Component } from '@angular/core';
import { SkillGraphicComponent } from './skill-graphic.component/skill-graphic.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [SkillGraphicComponent, FormsModule],
  standalone: true
})

export class AppComponent {
  title = 'app';
}


