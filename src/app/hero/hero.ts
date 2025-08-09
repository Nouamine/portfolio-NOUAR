import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer";
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1>NOUAR Amine</h1>
          <h2>Software Engineer</h2>
          <p>Specialized in AI Systems, Data Engineering & Full Stack Development</p>
          <div class="hero-buttons">
            <button class="btn-primary" (click)="scrollTo('contact')">Contact Me</button>
            <button class="btn-secondary" (click)="downloadCV()">Download CV</button>
          </div>
        </div>
        <div class="hero-image">
          <div class="profile-card">
            <img src="https://media.licdn.com/dms/image/v2/D4E03AQEWwehQE24_DA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721258136928?e=1757548800&v=beta&t=kpaqahzZIzzUOFREV7gdDIklK5AREpsv5tEcm-x6CHI" alt="AI and Data Engineering Specialist" />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    // Variables de couleur modifiées
$primary-blue: #7dd3fc; // Bleu ciel clair
$light-blue: #bae6fd; // Bleu ciel très clair
$accent-blue: #38bdf8; // Bleu ciel plus soutenu
$white: #ffffff;
$light-gray: #f8fafc;
$dark-text: #1e293b; // Texte foncé
$light-text: #64748b; // Texte gris

// Mixins réutilisables
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin hover-lift {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
}

// Section Hero modifiée
.hero {
  min-height: 100vh;
  background: $white;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
  margin-top: 0;
  
  // Effet de particules bleu ciel
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -30%;
    width: 80%;
    height: 200%;
    background: radial-gradient(circle, rgba($primary-blue, 0.05) 0%, transparent 70%);
    z-index: 0;
  }
  
  .container {
    position: relative;
    z-index: 1;
  }
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 4rem 0;
  
  @media (max-width: 992px) {
    gap: 3rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 6rem 0 3rem;
  }
}

.hero-image {
  background: linear-gradient(135deg, $light-blue, $white);
}

.hero-text {
  animation: fadeInLeft 0.8s ease-out forwards;
  
  h1 {
    font-size: 3.5rem;
    color: $dark-text;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    font-weight: 700;
    
    span {
      color: $accent-blue;
    }
    
    @media (max-width: 1200px) {
      font-size: 3rem;
    }
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
    
    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }
  
  h2 {
    font-size: 1.8rem;
    color: $accent-blue;
    margin-bottom: 2rem;
    font-weight: 400;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    color: $light-text;
    margin-bottom: 2.5rem;
    line-height: 1.6;
    max-width: 90%;
    
    @media (max-width: 768px) {
      max-width: 100%;
      font-size: 1.1rem;
    }
  }
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
}

.btn {
  padding: 0.9rem 2.2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s ease;
  @include hover-lift;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &-primary {
    background: $accent-blue;
    color: $white;
    border: 2px solid $accent-blue;
    
    &:hover {
      background: darken($accent-blue, 10%);
      border-color: darken($accent-blue, 10%);
      box-shadow: 0 5px 15px rgba($accent-blue, 0.4);
    }
    
    &:active {
      transform: translateY(1px);
    }
  }
  
  &-secondary {
    background: transparent;
    color: $accent-blue;
    border: 2px solid $accent-blue;
    
    &:hover {
      background: rgba($accent-blue, 0.1);
      color: $accent-blue;
      border-color: $accent-blue;
    }
  }
  
  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
}

.profile-card {
  background: $white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  border: 1px solid rgba($primary-blue, 0.2);
  animation: fadeInRight 0.8s ease-out forwards;
  @include hover-lift;
  
  img {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid $light-blue;
    box-shadow: 0 10px 30px rgba($primary-blue, 0.1);
    transition: all 0.5s ease;
    
    @media (max-width: 992px) {
      width: 240px;
      height: 240px;
    }
    
    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
      margin: 0 auto;
    }
  }
  
  &:hover img {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba($primary-blue, 0.2);
  }
}

// Social links modifiés
.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  
  a {
    color: $accent-blue;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba($accent-blue, 0.1);
    @include flex-center;
    transition: all 0.3s ease;
    border: 1px solid rgba($accent-blue, 0.3);
    
    &:hover {
      background: $accent-blue;
      color: $white;
      transform: translateY(-3px);
    }
    
    svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }
  }
}

// Animations
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

// Scroll indicator modifié
.scroll-down {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: $light-text;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: $accent-blue;
    
    .mouse {
      border-color: $accent-blue;
      
      .wheel {
        background: $accent-blue;
      }
    }
  }
}

.mouse {
  width: 25px;
  height: 40px;
  border: 2px solid rgba($accent-blue, 0.7);
  border-radius: 20px;
  margin-bottom: 0.5rem;
  position: relative;
  
  .wheel {
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: rgba($accent-blue, 0.7);
    border-radius: 2px;
    animation: scrollWheel 2s infinite;
  }
}

@keyframes scrollWheel {
  0% {
    transform: translate(-50%, 0);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, 10px);
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, 0);
    opacity: 1;
  }
}

// Responsive design
@media (max-width: 768px) {
  .hero {
    padding-top: 80px;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-text {
    order: 2;
    margin-top: 2rem;
    
    p {
      margin-left: auto;
      margin-right: auto;
    }
  }
  
  .profile-card {
    order: 1;
    margin: 0 auto;
  }
  
  .hero-buttons {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 0 1.5rem;
    padding-top: 70px;
  }
  
  .hero-text {
    h1 {
      font-size: 2.2rem;
    }
    
    h2 {
      font-size: 1.3rem;
    }
  }
  
  .btn {
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
  }
}
  `]
})
export class HeroComponent {
  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  downloadCV() {
    // Logique pour télécharger le CV
    console.log('Downloading CV...');
  }
}