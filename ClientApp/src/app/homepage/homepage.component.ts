import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { SkillGraphicComponent } from '../skill-graphic.component/skill-graphic.component';

@Component({
  selector: 'app-homepage',
  imports: [SkillGraphicComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {

}
