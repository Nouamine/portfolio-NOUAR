import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills">
      <div class="container">
        
        <div class="skills-categories">
          <div class="skill-category" *ngFor="let category of skillCategories">
            <h3>{{ category.title }}</h3>
            <div class="skills-list">
              <div class="skill-item" *ngFor="let skill of category.skills">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" [style.width.%]="skill.level"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
// Variables pour la cohérence
// Variables de couleur
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

// Mixins réutilisables
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin card-shadow {
  box-shadow: 0 4px 6px -1px $shadow-light, 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

@mixin hover-effect {
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px -3px $shadow-blue;
  }
}

// Styles globaux
.portfolio {
  font-family: 'Inter', 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: $text-medium;
  background-color: $bg-white;
  
  a {
    color: $primary-color;
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: $accent-color;
    }
  }
  
  h1, h2, h3, h4 {
    color: $text-dark;
    font-weight: 600;
    line-height: 1.3;
  }
  
  section {
    padding: 5rem 0;
    
    @media (max-width: 768px) {
      padding: 3rem 0;
    }
  }
  
  .section-title {
    text-align: center;
    margin-top: 100;
    margin-bottom: 3rem;
    position: relative;
    
    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, $primary-color, $accent-color);
      margin: 1.5rem auto 0;
      border-radius: 2px;
    }
  }
}

// Header
.portfolio-header {
  background: linear-gradient(135deg, $bg-white 0%, $bg-light 100%);
  padding: 2rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 3px $shadow-light;
  
  .container {
    margin-top: 80;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    
    padding: 0 2rem;
    
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0 1rem;
    }
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: $primary-color;
    display: flex;
    align-items: center;
    
    span {
      color: $accent-color;
    }
    
    svg {
      margin-right: 0.5rem;
      fill: $primary-color;
    }
  }
  
  .nav-menu {
    display: flex;
    gap: 2rem;
    
    @media (max-width: 768px) {
      margin-top: 1rem;
      gap: 1rem;
    }
    
    a {
      color: $text-dark;
      font-weight: 500;
      padding: 0.5rem 0;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: $primary-color;
        transition: width 0.3s ease;
      }
      
      &:hover::after {
        width: 100%;
      }
      
      &.active {
        color: $primary-color;
        
        &::after {
          width: 100%;
        }
      }
    }
  }
}

// Hero Section
.hero {
  background: linear-gradient(135deg, $bg-light 0%, rgba($primary-light, 0.1) 100%);
  padding: 6rem 0;
  text-align: center;
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 2.25rem;
    }
  }
  
  p {
    font-size: 1.25rem;
    color: $text-light;
    margin-bottom: 2.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
    }
    
    .btn {
      padding: 0.75rem 2rem;
      border-radius: 8px;
      font-weight: 500;
      transition: all 0.3s ease;
      
      &-primary {
        background: $primary-color;
        color: white;
        
        &:hover {
          background: darken($primary-color, 5%);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px $shadow-blue;
        }
      }
      
      &-secondary {
        border: 1px solid $primary-color;
        color: $primary-color;
        
        &:hover {
          background: rgba($primary-color, 0.05);
          transform: translateY(-2px);
        }
      }
    }
  }
}

// About Section
.about {
  background-color: $bg-white;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
  
  .about-image {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    @include card-shadow;
    @include hover-effect;
    
    img {
      width: 100%;
      height: auto;
      display: block;
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba($primary-color, 0.1) 0%, rgba($accent-color, 0.1) 100%);
    }
  }
  
  .about-content {
    h2 {
      margin-bottom: 1.5rem;
    }
    
    p {
      margin-bottom: 1.5rem;
      color: $text-light;
    }
    
    .skills-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 2rem;
      
      span {
        background: rgba($primary-color, 0.1);
        color: $primary-color;
        padding: 0.5rem 1rem;
        border-radius: 50px;
        font-size: 0.85rem;
        font-weight: 500;
      }
    }
  }
}

// Projects Section
.projects {
  background-color: $bg-light;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  
  .project-card {
    background: $bg-white;
    border-radius: 12px;
    overflow: hidden;
    @include card-shadow;
    @include hover-effect;
    
    .project-image {
      width: 100%;
      height: 200px;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
    }
    
    &:hover .project-image img {
      transform: scale(1.05);
    }
    
    .project-content {
      padding: 1.5rem;
      
      h3 {
        margin-bottom: 0.75rem;
      }
      
      p {
        color: $text-light;
        margin-bottom: 1.5rem;
        font-size: 0.95rem;
      }
      
      .project-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        
        span {
          background: $bg-light;
          color: $text-light;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 500;
        }
      }
      
      .project-links {
        display: flex;
        gap: 1rem;
        
        a {
          @include flex-center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          
          svg {
            width: 16px;
            height: 16px;
            fill: currentColor;
          }
        }
      }
    }
  }
}

// Skills Section (adapté de votre CSS)
.skills {
  background: $bg-white;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .skills-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
  
  .skill-category {
    background: $bg-white;
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px $shadow-light;
    border: 1px solid $border-color;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 25px -3px $shadow-blue;
      border-color: rgba($primary-color, 0.2);
    }
    
    h3 {
      color: $text-dark;
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      text-align: center;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 40px;
        height: 2px;
        background: $primary-color;
        border-radius: 1px;
      }
    }
  }
  
  .skill-item {
    margin-bottom: 1.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .skill-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    
    .skill-name {
      color: $text-dark;
      font-weight: 500;
      font-size: 0.95rem;
    }
    
    .skill-level {
      color: $primary-color;
      font-weight: 600;
      font-size: 0.875rem;
    }
  }
  
  .skill-bar {
    height: 6px;
    background: $border-color;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
  }
  
  .skill-progress {
    height: 100%;
    background: linear-gradient(90deg, $primary-color 0%, $accent-color 100%);
    border-radius: 3px;
    transition: width 1.2s ease-out;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.2), 
        transparent);
      animation: shimmer 2s infinite;
    }
  }
}

// Contact Section
.contact {
  background: linear-gradient(135deg, $bg-light 0%, rgba($primary-light, 0.1) 100%);
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .contact-form {
    background: $bg-white;
    padding: 2.5rem;
    border-radius: 12px;
    @include card-shadow;
    
    @media (max-width: 768px) {
      padding: 1.5rem;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
      
      label {
        display: block;
        margin-bottom: 0.5rem;
        color: $text-dark;
        font-weight: 500;
      }
      
      input, textarea {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid $border-color;
        border-radius: 8px;
        font-family: inherit;
        font-size: 1rem;
        transition: border-color 0.3s ease;
        
        &:focus {
          outline: none;
          border-color: $primary-color;
          box-shadow: 0 0 0 3px rgba($primary-color, 0.1);
        }
      }
      
      textarea {
        min-height: 150px;
        resize: vertical;
      }
    }
    
    .submit-btn {
      background: $primary-color;
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 8px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background: darken($primary-color, 5%);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px $shadow-blue;
      }
    }
  }
  
  .contact-info {
    margin-top: 3rem;
    text-align: center;
    
    p {
      color: $text-light;
      margin-bottom: 1.5rem;
    }
    
    .social-links {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      
      a {
        @include flex-center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba($primary-color, 0.1);
        color: $primary-color;
        transition: all 0.3s ease;
        
        &:hover {
          background: $primary-color;
          color: white;
          transform: translateY(-3px);
        }
        
        svg {
          width: 20px;
          height: 20px;
          fill: currentColor;
        }
      }
    }
  }
}

// Footer
.portfolio-footer {
  background: $text-dark;
  color: white;
  padding: 2rem 0;
  text-align: center;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  p {
    margin-bottom: 1rem;
    color: rgba(white, 0.7);
  }
  
  .footer-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    
    a {
      color: white;
      opacity: 0.7;
      transition: opacity 0.3s ease;
      
      &:hover {
        opacity: 1;
      }
    }
  }
  
  .copyright {
    font-size: 0.875rem;
    color: rgba(white, 0.5);
  }
}

// Animations
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

// Responsive adjustments
@media (max-width: 768px) {
  .section-title {
    margin-bottom: 2rem;
  }
  
  .hero {
    padding: 4rem 0;
  }
}
  `]
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Programming & Development',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'C/C++', level: 80 },
        { name: 'Angular', level: 85 },
        { name: 'Node.js', level: 75 }
      ]
    },
    {
      title: 'AI/ML & Data Science',
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'NLP', level: 75 },
        { name: 'Computer Vision', level: 70 }
      ]
    },
    {
      title: 'Databases & Cloud',
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Microsoft Azure', level: 75 },
        { name: 'MySQL/PostgreSQL', level: 80 },
        { name: 'Database Design', level: 85 }
      ]
    },
    {
      title: 'Tools & Methodologies',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Linux', level: 80 },
        { name: 'SCRUM', level: 85 },
        { name: 'Spring Boot', level: 80 },
        { name: 'Django', level: 75 }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Team Leadership', level: 90 },
        { name: 'Project Management', level: 85 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Time Management', level: 85 },
        { name: 'Technical Training', level: 80 }
      ]
    }
  ];
}