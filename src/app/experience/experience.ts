import { Component, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="experience">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Professional Experience</h2>
          <p class="section-subtitle">Career journey and key achievements</p>
        </div>
        
        <div class="timeline">
          <div class="timeline-item" 
               *ngFor="let exp of experiences; let i = index" 
               [class.visible]="isVisible[i]"
               [style.animation-delay]="i * 0.2 + 's'">
            <div class="timeline-marker">
              <div class="timeline-dot"></div>
              <div class="timeline-connector"></div>
            </div>
            
            <div class="timeline-content">
              <div class="experience-header">
                <div class="experience-period">
                  <svg class="period-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                  <span>{{ exp.period }}</span>
                </div>
                
                <div class="experience-level">
                  <span class="level-badge" [class]="'level-' + exp.level">{{ exp.level }}</span>
                </div>
              </div>
              
              <h3 class="experience-title">{{ exp.title }}</h3>
              <h4 class="experience-company">
                <svg class="company-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                </svg>
                {{ exp.company }}
              </h4>
              
              <p class="experience-description">{{ exp.description }}</p>
              
              <div class="experience-achievements">
                <h5>Key Achievements:</h5>
                <ul class="achievements-list">
                  <li *ngFor="let task of exp.tasks">
                    <svg class="achievement-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {{ task }}
                  </li>
                </ul>
              </div>
              
              <div class="experience-skills">
                <h5>Core Skills:</h5>
                <div class="skills-container">
                  <span class="skill-tag" *ngFor="let skill of exp.skills">
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
     // Variables SCSS modifiées pour fond blanc et bleu ciel
$primary-color: #7dd3fc; // Bleu ciel plus clair
$primary-dark: #38bdf8; // Bleu ciel plus soutenu
$secondary-color: #64748b;
$accent-color: #bae6fd; // Bleu ciel très clair
$success-color: #10b981;
$warning-color: #f59e0b;
$danger-color: #ef4444;

// Couleurs de texte
$text-primary: #1e293b;
$text-secondary: #475569;
$text-muted: #64748b;

// Couleurs de fond
$bg-primary: #ffffff; // Fond blanc
$bg-secondary: #f8fafc;
$bg-accent: #f0f9ff; // Bleu ciel très très clair
$border-color: #e2e8f0;

// Ombres
$shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
$shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
$shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
$shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

// Rayons de bordure
$radius-sm: 6px;
$radius-md: 8px;
$radius-lg: 12px;

// Transitions
$transition-base: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
$transition-fast: all 0.15s ease;
$transition-slow: all 0.5s ease;

// Breakpoints
$breakpoint-sm: 480px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1200px;

// Mixins (inchangés)
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@mixin hover-lift {
  transition: $transition-base;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: $shadow-xl;
  }
}

@mixin gradient-text($color1, $color2) {
  background: linear-gradient(135deg, $color1, $color2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@mixin pulse-animation {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
}

// Section principale
.experience {
  padding: 6rem 0;
  background: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="0.5" fill="%237dd3fc" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    pointer-events: none;
  }
}

.container {
  max-width: $breakpoint-xl;
  margin: 0 auto;
  background: white;
  padding: 0 2rem;
  position: relative;
}

// En-tête de section
.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}

.section-title {
  font-size: 2.75rem;
  font-weight: 700;
  color: $text-primary;
  margin-bottom: 1rem;
  @include gradient-text($primary-dark, $primary-color);
  letter-spacing: -0.025em;
}

.section-subtitle {
  font-size: 1.1rem;
  color: $text-secondary;
  font-weight: 500;
  max-width: 600px;
  margin: 0 auto;
}

// Timeline
.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 32px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: $bg-accent;
    border-radius: 1px;
  }
}

// Timeline Items
.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateX(-30px);
  transition: $transition-base;

  &.visible {
    opacity: 1;
    transform: translateX(0);

    .timeline-dot {
      transform: scale(1.2);
      box-shadow: 0 0 0 6px rgba(125, 211, 252, 0.2);
    }
  }
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 1rem;
  z-index: 10;
}

.timeline-dot {
  width: 18px;
  height: 18px;
  background: $bg-primary;
  border: 3px solid $primary-color;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(125, 211, 252, 0.1);
  transition: $transition-base;
}

.timeline-connector {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 2px;
  background: linear-gradient(to right, $primary-color, transparent);
}

// Contenu Timeline
.timeline-content {
  margin-left: 4rem;
  background: $bg-primary;
  padding: 2rem;
  border-radius: $radius-lg;
  box-shadow: $shadow-lg;
  border: 1px solid $border-color;
  position: relative;
  transition: $transition-base;
  overflow: hidden;
  @include hover-lift;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, $primary-color, $accent-color);
  }
}

// En-tête expérience
.experience-header {
  @include flex-between;
  margin-bottom: 1.5rem;
}

.experience-period {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: $text-secondary;
  font-weight: 600;
  font-size: 0.9rem;
}

.period-icon {
  width: 16px;
  height: 16px;
  color: $primary-color;
}

.experience-level {
  display: flex;
  align-items: center;
}

.level-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &.level-senior {
    background: rgba(16, 185, 129, 0.1);
    color: $success-color;
    border: 1px solid rgba(16, 185, 129, 0.2);
  }

  &.level-junior {
    background: rgba(245, 158, 11, 0.1);
    color: $warning-color;
    border: 1px solid rgba(245, 158, 11, 0.2);
  }

  &.level-intermediate {
    background: rgba(56, 189, 248, 0.1); // Adapté au bleu ciel
    color: $primary-dark;
    border: 1px solid rgba(56, 189, 248, 0.2);
  }
}

// Titres
.experience-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: $text-primary;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.experience-company {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: $text-secondary;
  margin-bottom: 1.5rem;
}

.company-icon {
  width: 18px;
  height: 18px;
  color: $primary-color;
}

.experience-description {
  font-size: 1rem;
  color: $text-secondary;
  line-height: 1.7;
  margin-bottom: 2rem;
}

// Réalisations
.experience-achievements {
  margin-bottom: 2rem;

  h5 {
    font-size: 1rem;
    font-weight: 600;
    color: $text-primary;
    margin-bottom: 1rem;
  }
}

.achievements-list {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    color: $text-secondary;
    line-height: 1.6;
  }
}

.achievement-icon {
  width: 16px;
  height: 16px;
  color: $success-color;
  margin-top: 0.125rem;
  flex-shrink: 0;
}

// Compétences
.experience-skills {
  h5 {
    font-size: 1rem;
    font-weight: 600;
    color: $text-primary;
    margin-bottom: 1rem;
  }
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: $bg-accent;
  color: $text-primary;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid $border-color;
  transition: $transition-base;

  &:hover {
    background: $primary-dark;
    color: white;
    transform: translateY(-1px);
  }
}

// Responsive Design (inchangé)
@media (max-width: $breakpoint-md) {
  .experience {
    padding: 4rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .timeline {
    &::before {
      left: 16px;
    }
  }

  .timeline-marker {
    left: 8px;
  }

  .timeline-dot {
    width: 14px;
    height: 14px;
  }

  .timeline-content {
    margin-left: 2.5rem;
    padding: 1.5rem;
  }

  .experience-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .experience-title {
    font-size: 1.25rem;
  }

  .skills-container {
    gap: 0.375rem;
  }

  .skill-tag {
    font-size: 0.8rem;
    padding: 0.375rem 0.75rem;
  }
}

@media (max-width: $breakpoint-sm) {
  .section-title {
    font-size: 2rem;
  }

  .timeline-content {
    margin-left: 2rem;
    padding: 1.25rem;
  }

  .experience-title {
    font-size: 1.125rem;
  }

  .experience-company {
    font-size: 1rem;
  }
}

// Animations personnalisées (inchangées)
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleUp {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

// Classes utilitaires (inchangées)
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.animate-slide-in-left {
  animation: slideInLeft 0.6s ease-out;
}

.animate-scale-up {
  animation: scaleUp 0.4s ease-out;
}

// États de survol avancés
.timeline-item:hover {
  .timeline-dot {
    @include pulse-animation;
  }
  
  .skill-tag {
    transform: translateY(-2px);
    box-shadow: $shadow-md;
  }
}

// Suppression du thème sombre pour conserver le style blanc/bleu ciel
  `]
})
export class ExperienceComponent implements AfterViewInit {
  isVisible: boolean[] = [];
  experiences = [
    {
      period: 'Jul 2025 - Aug 2025',
      title: 'AI Engineering Intern',
      company: 'JESA',
      level: 'intermediate',
      description: 'Final year project internship in AI for automating regulatory deliverables through web scraping and Django interface development.',
      tasks: [
        'Designed and developed regulatory reporting automation solution',
        'Implemented web scraping algorithms for automated data collection',
        'Built admin interface using Django framework',
        'Integrated AI models for document processing and classification',
        'Automated regulatory deliverables generation',
        'Optimized business processes using AI',
        'Created technical documentation and user training materials'
      ],
      skills: ['Python', 'Django', 'Web Scraping', 'Automated Processing', 'AI', 'Automation', 'Project Management']
    },
    {
      period: 'Jul 2024 - Aug 2024',
      title: 'Web Developer',
      company: 'SUPER CERAME',
      level: 'junior',
      description: 'Developed an order management application with real-time stock control and client credit management for industrial company.',
      tasks: [
        'Implemented order management features',
        'Developed real-time stock control system',
        'Built client credit management with automated validation',
        'Created real-time order status updates',
        'Collaborated with business teams to understand requirements',
        'Conducted testing and application deployment'
      ],
      skills: ['Web Development', 'Database Management', 'User Interface', 'Real-time Solutions', 'Requirements Analysis']
    },
    {
      period: '2023 - 2026',
      title: 'Training Team Lead',
      company: 'Mines IT Club',
      level: 'intermediate',
      description: 'Led technical training and skill development for members of the engineering school\'s IT club.',
      tasks: [
        'Organized technical workshops and training sessions',
        'Mentored new club members',
        'Planned club activities and events',
        'Developed educational content',
        'Coordinated with other club teams',
        'Promoted events to student community'
      ],
      skills: ['Leadership', 'Technical Training', 'Organization', 'Communication', 'Project Management', 'Team Building']
    }
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      this.checkVisibility();
    }, 100);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.checkVisibility();
  }

  private checkVisibility() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight * 0.75) && 
                       (rect.bottom >= window.innerHeight * 0.25);
      
      if (isVisible && !this.isVisible[index]) {
        setTimeout(() => {
          this.isVisible[index] = true;
        }, index * 150);
      }
    });
  }
}