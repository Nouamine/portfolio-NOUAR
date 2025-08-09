import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: 'about',
    loadComponent: () => import('./about/about').then(m => m.AboutComponent)
  },

  {
    path: 'home',
    loadComponent: () => import('./hero/hero').then(m => m.HeroComponent)
  },

  {
    path: 'experience',
    loadComponent: () => import('./experience/experience').then(m => m.ExperienceComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./projects/projects').then(m => m.ProjectsComponent)
  },
  {
    path: 'skills',
    loadComponent: () => import('./skills/skills').then(m => m.SkillsComponent)
  },
  {
    path: 'education',
    loadComponent: () => import('./education/education').then(m => m.EducationComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then(m => m.ContactComponent)
  },
  // Fallback route (optional)
  {
    path: '**',
    redirectTo: 'home',
  }
];