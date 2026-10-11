import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterModule,HeaderComponent],
  standalone: true
})
export class AppComponent {
  title = 'TechSavvE';
}
