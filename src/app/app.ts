import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from './header/header';
import { HeroComponent} from './hero/hero';
import { AboutComponent} from './about/about';
import { ExperienceComponent} from './experience/experience';
import { ProjectsComponent} from './projects/projects';
import { SkillsComponent} from './skills/skills';
import { EducationComponent} from './education/education';
import { ContactComponent} from './contact/contact';
import { FooterComponent} from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
    
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'Portfolio Moujahid Asseban';
}