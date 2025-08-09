 import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <nav class="nav">
        <div class="nav-brand">
          <h2>NOUAR Amine</h2>
          <span>Software Engineer</span>
        </div>
        <ul class="nav-links">
          <li><a class="nav-link" href="home" (click)="scrollTo('home')">Home</a></li>
          <li><a class="nav-link" href="about" (click)="scrollTo('about')">About</a></li>
          <li><a class="nav-link" href="experience" (click)="scrollTo('experience')">Experience</a></li>
          <li><a class="nav-link" href="projects" (click)="scrollTo('projects')">Projects</a></li>
          <li><a class="nav-link" href="skills" (click)="scrollTo('skills')">Skills</a></li>
          <li><a class="nav-link" href="education" (click)="scrollTo('education')">Education</a></li>
          <li><a class="nav-link" href="contact" (click)="scrollTo('contact')">Contact</a></li>
        </ul>
        <div class="mobile-menu" [class.active]="mobileMenuOpen" (click)="toggleMobileMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    // Variables
$header-bg: rgba(26, 35, 126, 0.95);
$primary-blue: #2563eb;
$light-blue: #64b5f6;
$white: #ffffff;
$transition-speed: 0.3s;

// Header avec effet de disparition au scroll
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  transition: transform $transition-speed ease-in-out, background $transition-speed ease;
  
  // Effet de disparition quand on scroll vers le bas
  &.hidden {
    transform: translateY(-100%);
  }
  
  // Effet de réapparition quand on scroll vers le haut
  &.visible {
    transform: translateY(0);
  }
  
  // Header plus transparent quand en haut de page
  &.top {
    background: rgba(26, 35, 126, 0.8);
  }
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  h2 {
    color: $light-blue;
    margin: 0;
    margin-right: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    transition: color $transition-speed;
  }
  
  span {
    margin : 0;
    color: $light-blue;
    font-size: 0.9rem;
    font-weight: 400;
  }
  
  &:hover {
    h2 {
      color: $light-blue;
    }
  }
}
.nav-link {
  color: $white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  padding: 0.5rem 0;
  transition: color $transition-speed;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: $light-blue;
    transition: width $transition-speed ease;
  }

  &:hover {
    color: $light-blue;

    &::after {
      width: 100%;
    }
  }

  &.active {
    color: $light-blue;

    &::after {
      width: 100%;
    }
  }}
.nav-links {
  display: flex;
  list-style: none;
  gap: 1rem;
  margin: 0;
  padding: 0;
  
  
  a {
    color: black;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    position: relative;
    padding: 0.2rem 0;
    transition: color $transition-speed;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: $light-blue;
      transition: width $transition-speed ease;
    }
    
    &:hover {
      color: $light-blue;
      
      &::after {
        width: 100%;
      }
    }
    
    &.active {
      color: $light-blue;
      
      &::after {
        width: 100%;
      }
    }
  }
}

// Menu mobile
.mobile-menu {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  
  span {
    width: 25px;
    height: 2px;
    background: $white;
    margin: 4px 0;
    transition: all $transition-speed ease;
    transform-origin: left center;
  }
  
  &.open {
    span:nth-child(1) {
      transform: rotate(45deg);
    }
    
    span:nth-child(2) {
      opacity: 0;
    }
    
    span:nth-child(3) {
      transform: rotate(-45deg);
    }
  }
}

// Menu mobile ouvert
.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  max-width: 300px;
  background: darken($header-bg, 5%);
  backdrop-filter: blur(15px);
  z-index: 1000;
  transform: translateX(100%);
  transition: transform $transition-speed ease;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  &.open {
    transform: translateX(0);
  }
  
  a {
    color: $white;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba($white, 0.1);
    transition: color $transition-speed;
    
    &:hover {
      color: $light-blue;
    }
  }
}

// Overlay du menu mobile
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: opacity $transition-speed ease;
  
  &.open {
    opacity: 1;
    visibility: visible;
  }
}

// Media Queries
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu {
    display: flex;
  }
  
  .header {
    padding: 0.8rem 0;
  }
}

@media (max-width: 480px) {
  .nav {
    padding: 0 1rem;
  }
  
  .nav-brand {
    h2 {
      font-size: 1.3rem;
    }
    
    span {
      font-size: 0.8rem;
    }
  }
}


  `]
})
export class HeaderComponent {
  mobileMenuOpen = false;


  

  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}