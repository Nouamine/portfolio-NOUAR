import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects">
      <div class="container">
        <h2 class="section-title">Projects Portfolio</h2>
        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of projects">
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title" />
              <div class="project-overlay">
                <button class="btn-view">View Details</button>
              </div>
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tech">
                <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    
 // Variables étendues
 $primary-color: #2563eb;
 $primary-light: #93c5fd;
 $primary-lighter: #bfdbfe;
 $secondary-color: #64748b;
 $accent-color: #0ea5e9;
 $accent-light: #7dd3fc;
 $text-dark: #1e293b;
 $text-medium: #334155;
 $text-light: #64748b;
 $bg-light: #f8fafc;
 $bg-white: #ffffff;
 $border-color: #e2e8f0;
 $shadow-light: rgba(0, 0, 0, 0.1);
 $shadow-blue: rgba(37, 99, 235, 0.15);
 $overlay-bg: rgba(30, 41, 59, 0.85);
 $success-color: #059669;
 $warning-color: #f59e0b;
 $danger-color: #dc2626;
 $purple-color: #7c3aed;
 
 // Mixins réutilisables
 @mixin card-shadow {
   box-shadow: 0 4px 6px -1px $shadow-light, 0 2px 4px -1px rgba(0, 0, 0, 0.06);
 }
 
 @mixin hover-lift {
   transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
   &:hover {
     transform: translateY(-5px);
     box-shadow: 0 12px 20px -5px $shadow-blue;
   }
 }
 
 @mixin flex-center {
   display: flex;
   justify-content: center;
   align-items: center;
 }
 
 // Section principale
 .projects {
   padding: 6rem 0;
   background: linear-gradient(135deg, $bg-light 0%, rgba($primary-light, 0.05) 100%);
   position: relative;
   overflow: hidden;
   
   &::before {
     content: '';
     position: absolute;
     top: -50%;
     right: -10%;
     width: 60%;
     height: 200%;
     background: radial-gradient(circle, rgba($accent-light, 0.1) 0%, transparent 70%);
     z-index: 0;
   }
   
   .container {
     position: relative;
     max-width: 1200px;
     margin: 0 auto;
     padding: 0 2rem;
     z-index: 1;
   }
   
   .section-title {
     text-align: center;
     margin-bottom: 4rem;
     
     h2 {
       font-size: 2.5rem;
       color: $text-dark;
       margin-bottom: 1rem;
       position: relative;
       display: inline-block;
       
       &::after {
         content: '';
         position: absolute;
         bottom: -10px;
         left: 50%;
         transform: translateX(-50%);
         width: 80px;
         height: 4px;
         background: linear-gradient(90deg, $primary-color, $accent-color);
         border-radius: 2px;
       }
     }
     
     p {
       color: $text-light;
       max-width: 600px;
       margin: 0 auto;
       font-size: 1.1rem;
     }
   }
 }
 
 // Grille des projets
 .projects-grid {
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
   gap: 2.5rem;
   margin-top: 1rem;
   
   @media (max-width: 768px) {
     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
     gap: 2rem;
   }
   
   @media (max-width: 480px) {
     grid-template-columns: 1fr;
     gap: 1.5rem;
   }
 }
 
 // Carte de projet
 .project-card {
   background: $bg-white;
   border-radius: 16px;
   overflow: hidden;
   @include card-shadow;
   @include hover-lift;
   border: 1px solid rgba($border-color, 0.7);
   transition: all 0.4s ease;
   position: relative;
   
   &::before {
     content: '';
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background: linear-gradient(135deg, rgba($primary-color, 0.03) 0%, transparent 100%);
     z-index: 0;
   }
   
   &:hover {
     border-color: rgba($primary-color, 0.3);
     
     .project-image img {
       transform: scale(1.08);
     }
     
     .project-overlay {
       opacity: 1;
       backdrop-filter: blur(4px);
     }
   }
 }
 
 // Image du projet
 .project-image {
   position: relative;
   height: 240px;
   overflow: hidden;
   background: linear-gradient(135deg, $primary-lighter 0%, $bg-light 100%);
   
   img {
     width: 100%;
     height: 100%;
     object-fit: cover;
     transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
   }
 }
 
 // Overlay au survol
 .project-overlay {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba($primary-color, 0.7);
   @include flex-center;
   flex-direction: column;
   opacity: 0;
   transition: all 0.4s ease;
   padding: 2rem;
   text-align: center;
   
   h3 {
     color: $bg-white;
     font-size: 1.5rem;
     margin-bottom: 1rem;
     text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
   }
   
   p {
     color: rgba($bg-white, 0.9);
     margin-bottom: 2rem;
     font-size: 0.95rem;
   }
 }
 
 // Boutons d'action
 .project-actions {
   display: flex;
   gap: 1rem;
   
   .btn {
     padding: 0.75rem 1.5rem;
     border-radius: 8px;
     font-weight: 500;
     font-size: 0.9rem;
     transition: all 0.3s ease;
     @include flex-center;
     gap: 0.5rem;
     
     &-primary {
       background: $bg-white;
       color: $primary-color;
       
       &:hover {
         background: darken($bg-white, 5%);
         transform: translateY(-2px);
         box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
       }
     }
     
     &-secondary {
       background: transparent;
       color: $bg-white;
       border: 1px solid rgba($bg-white, 0.3);
       
       &:hover {
         background: rgba($bg-white, 0.1);
         border-color: $bg-white;
       }
     }
     
     svg {
       width: 16px;
       height: 16px;
       fill: currentColor;
     }
   }
 }
 
 // Contenu du projet
 .project-content {
   padding: 2rem;
   position: relative;
   z-index: 1;
   
   h3 {
     color: $text-dark;
     font-size: 1.3rem;
     font-weight: 600;
     margin-bottom: 1rem;
     line-height: 1.4;
   }
   
   p {
     color: $text-light;
     line-height: 1.6;
     margin-bottom: 1.5rem;
     font-size: 0.95rem;
   }
 }
 
 // Métadonnées du projet
 .project-meta {
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 1.5rem;
   padding-top: 1.5rem;
   border-top: 1px solid $border-color;
   
   .project-date {
     color: lighten($text-light, 10%);
     font-size: 0.85rem;
     display: flex;
     align-items: center;
     gap: 0.5rem;
     
     svg {
       width: 14px;
       height: 14px;
       fill: currentColor;
     }
   }
 }
 
 // Technologies utilisées
 .project-tech {
   display: flex;
   flex-wrap: wrap;
   gap: 0.6rem;
   margin-top: 1.2rem;
 }
 
 .tech-tag {
   background: rgba($primary-color, 0.08);
   color: $primary-color;
   padding: 0.45rem 0.9rem;
   border-radius: 20px;
   font-size: 0.8rem;
   font-weight: 500;
   border: 1px solid rgba($primary-color, 0.15);
   transition: all 0.2s ease;
   display: flex;
   align-items: center;
   gap: 0.4rem;
   
   &:hover {
     background: rgba($primary-color, 0.15);
     transform: translateY(-2px);
     box-shadow: 0 2px 6px rgba($primary-color, 0.1);
   }
   
   svg {
     width: 14px;
     height: 14px;
     fill: currentColor;
   }
   
   // Variantes de couleurs pour les tags
   &.frontend {
     background: rgba($success-color, 0.08);
     color: $success-color;
     border-color: rgba($success-color, 0.15);
     
     &:hover {
       background: rgba($success-color, 0.15);
     }
   }
   
   &.backend {
     background: rgba($danger-color, 0.08);
     color: $danger-color;
     border-color: rgba($danger-color, 0.15);
     
     &:hover {
       background: rgba($danger-color, 0.15);
     }
   }
   
   &.database {
     background: rgba($purple-color, 0.08);
     color: $purple-color;
     border-color: rgba($purple-color, 0.15);
     
     &:hover {
       background: rgba($purple-color, 0.15);
     }
   }
   
   &.tools {
     background: rgba($warning-color, 0.08);
     color: $warning-color;
     border-color: rgba($warning-color, 0.15);
     
     &:hover {
       background: rgba($warning-color, 0.15);
     }
   }
 }
 
 // Badge d'état
 .project-status {
   position: absolute;
   top: 1.5rem;
   right: 1.5rem;
   padding: 0.35rem 0.8rem;
   border-radius: 20px;
   font-size: 0.75rem;
   font-weight: 600;
   z-index: 2;
   
   &.in-progress {
     background: rgba($warning-color, 0.1);
     color: $warning-color;
     border: 1px solid rgba($warning-color, 0.2);
   }
   
   &.completed {
     background: rgba($success-color, 0.1);
     color: $success-color;
     border: 1px solid rgba($success-color, 0.2);
   }
 }
 
 // Animation d'apparition
 .project-card {
   opacity: 0;
   transform: translateY(30px);
   animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
   
   @for $i from 1 through 12 {
     &:nth-child(#{$i}) {
       animation-delay: #{$i * 0.1}s;
     }
   }
 }
 
 @keyframes fadeInUp {
   to {
     opacity: 1;
     transform: translateY(0);
   }
 }
 
 // Filtres de projets
 .projects-filters {
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap: 0.75rem;
   margin-bottom: 3rem;
   
   .filter-btn {
     padding: 0.5rem 1.25rem;
     border-radius: 20px;
     font-size: 0.9rem;
     font-weight: 500;
     background: transparent;
     border: 1px solid $border-color;
     color: $text-light;
     cursor: pointer;
     transition: all 0.3s ease;
     
     &:hover {
       border-color: $primary-color;
       color: $primary-color;
     }
     
     &.active {
       background: $primary-color;
       color: $bg-white;
       border-color: $primary-color;
     }
   }
 }
 
 // Responsive design
 @media (max-width: 768px) {
   .projects {
     padding: 4rem 0;
     
     .section-title h2 {
       font-size: 2rem;
     }
   }
   
   .project-image {
     height: 200px;
   }
   
   .project-content {
     padding: 1.5rem;
   }
   
   .project-overlay {
     padding: 1.5rem;
     
     h3 {
       font-size: 1.3rem;
     }
   }
 }
 
 @media (max-width: 480px) {
   .projects-grid {
     gap: 1.25rem;
   }
   
   .project-content {
     padding: 1.25rem;
     
     h3 {
       font-size: 1.2rem;
     }
   }
   
   .project-actions {
     flex-direction: column;
     width: 100%;
     
     .btn {
       width: 100%;
       justify-content: center;
     }
   }
 }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Learning Platform',
      description: 'Development of a secure e-learning platform with Spring Boot (backend), Angular (frontend) and MySQL/PostgreSQL database. Implemented user, course and role management via Spring Security.',
      image: '/assets/project1.jpg',
      technologies: ['Spring Boot', 'Angular', 'MySQL/PostgreSQL', 'Spring Security']
    },
    {
      title: 'Digital Health Record System',
      description: 'Design and development of a secure web/mobile application for managing, storing and sharing medical records with advanced data protection features.',
      image: '/assets/project2.jpg',
      technologies: ['PHP', 'Relational Database', 'Data Security', 'Web/Mobile Application']
    },
    {
      title: 'Smart Parking Management Simulator',
      description: 'Java application for optimal vehicle entry/exit management, automated parking fee calculation, and real-time parking space visualization with intuitive UI.',
      image: '/assets/project3.jpg',
      technologies: ['Java', 'Optimization Algorithms', 'User Interface', 'Real-time Management']
    },
    {
      title: 'Restaurant Website with Django',
      description: 'Dynamic restaurant website with online reservation system, interactive menu, and admin dashboard for order management.',
      image: '/assets/project4.jpg',
      technologies: ['Django', 'Python', 'Database', 'Responsive Interface']
    },
    {
      title: 'N-Queens Problem Solver in C',
      description: 'Algorithmic implementation of the classic N-Queens problem with graphical interface to visualize possible solutions using backtracking.',
      image: '/assets/project5.jpg',
      technologies: ['C Language', 'Backtracking Algorithms', 'Graphical Interface', 'Optimization']
    },
    {
      title: 'Hotel Booking Management System',
      description: 'Complete web platform for hotel reservations across multiple cities with integrated payment system and admin dashboard.',
      image: '/assets/project6.jpg',
      technologies: ['Django', 'Database', 'Payment System', 'Admin Dashboard']
    }
  ];
}





