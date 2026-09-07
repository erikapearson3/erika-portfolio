import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-graphic',
  templateUrl: './skill-graphic.component.html',
  styleUrls: ['./skill-graphic.component.css'],
  standalone: true
})


export class SkillGraphicComponent {
  @Input() skills = [
    { name: 'Angular', proficiency: 85 },
    { name: 'TypeScript', proficiency: 80 },
    { name: 'HTML/CSS', proficiency: 95 },
  ];;

  // Set dimensions for the SVG container
  svgWidth = 400;
  barHeight = 20;
  padding = 5;

  // Calculate the total height based on the number of skills
  getSvgHeight(): number {
    return this.skills.length * (this.barHeight + this.padding);
  }

  // Calculate bar width based on proficiency (assuming 1-100)
  getBarWidth(proficiency: number): number {
    return (proficiency / 100) * (this.svgWidth - 100); // Scale to fit inside SVG
  }
}
