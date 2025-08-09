import { Component, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="education">
      <div class="container">
        <h2 class="section-title">Formation Académique</h2>
        
        <div class="education-timeline">
          <div class="education-item" *ngFor="let edu of educations; let i = index" [class.visible]="isVisible[i]">
            <div class="education-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0l-.341-.18-.003-.002a49.95 49.95 0 00-9.903-3.912.75.75 0 01-.23-1.337A60.653 60.653 0 0111.7 2.805z"/>
                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"/>
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"/>
              </svg>
            </div>
            <div class="education-content">
              <div class="education-period">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd"/>
                </svg>
                {{ edu.period }}
              </div>
              <h3>{{ edu.degree }}</h3>
              <h4>{{ edu.institution }}</h4>
              <p>{{ edu.description }}</p>
              
              <div class="education-details" *ngIf="edu.details?.length">
                <ul>
                  <li *ngFor="let detail of edu.details">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"/>
                    </svg>
                    {{ detail }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="certifications">
          <h3 class="cert-title">Certifications Professionnelles</h3>
          <div class="cert-grid">
            <div class="cert-item" *ngFor="let cert of certifications; let i = index" [class.visible]="isCertVisible[i]">
              <div class="cert-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h4>{{ cert.name }}</h4>
              <p>{{ cert.issuer }}</p>
              <span class="cert-date">{{ cert.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Variables modifiées pour fond blanc et bleu ciel */
:root {
  --primary-color: #7dd3fc; /* Bleu ciel principal */
  --primary-dark: #38bdf8; /* Bleu ciel plus foncé */
  --accent-color: #bae6fd; /* Bleu ciel très clair */
  --text-dark: #1e293b; /* Gris foncé */
  --text-medium: #475569; /* Gris moyen */
  --text-light: #64748b; /* Gris clair */
  --bg-light: #f8fafc; /* Fond très clair */
  --bg-white: #ffffff; /* Blanc pur */
  --bg-accent: #f0f9ff; /* Bleu ciel ultra clair */
  --shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  --border-radius: 15px;
  --transition-speed: 0.4s;
}

.education {
  padding: 5rem 0;
  background: var(--bg-white); /* Fond blanc au lieu de bg-light */
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title h2 {
  font-size: 2.5rem;
  color: var(--primary-dark); /* Utilisation du bleu ciel foncé */
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.section-title h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 2px;
}

/* Timeline Styles */
.education-timeline {
  position: relative;
  margin: 3rem 0;
  padding: 0 1rem;
}

.education-timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--primary-color); /* Ligne bleu ciel */
  z-index: 1;
}

.education-item {
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: flex-start;
  opacity: 0;
  transform: translateY(30px);
  transition: all var(--transition-speed) ease;
}

.education-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.education-icon {
  position: relative;
  width: 60px;
  height: 60px;
  background: var(--primary-color); /* Icône bleu ciel */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  z-index: 2;
  flex-shrink: 0;
  transition: all var(--transition-speed) ease;
}

.education-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 0 0 6px rgba(125, 211, 252, 0.2); /* Ombre bleu ciel */
}

.education-icon svg {
  width: 24px;
  height: 24px;
  fill: var(--bg-white);
}

.education-content {
  flex: 1;
  background: var(--bg-white);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  transition: all var(--transition-speed) ease;
  border: 1px solid rgba(125, 211, 252, 0.2); /* Bordure bleu ciel très subtile */
}

.education-item:hover .education-content {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(125, 211, 252, 0.1); /* Ombre bleu ciel */
}

.education-period {
  color: var(--primary-dark); /* Bleu ciel foncé */
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.education-period svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.education-content h3 {
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
}

.education-content h4 {
  color: var(--text-medium);
  margin-bottom: 1.2rem;
  font-weight: 500;
  font-size: 1.1rem;
}

.education-content p {
  color: var(--text-medium);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.education-details ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.education-details li {
  color: var(--text-medium);
  margin-bottom: 0.8rem;
  padding-left: 2rem;
  position: relative;
  line-height: 1.6;
}

.education-details li svg {
  position: absolute;
  left: 0;
  top: 0.25rem;
  width: 16px;
  height: 16px;
  fill: var(--primary-color); /* Icône bleu ciel */
}

/* Certifications Styles */
.certifications {
  margin-top: 5rem;
}

.cert-title {
  color: var(--primary-dark); /* Bleu ciel foncé */
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.8rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.cert-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: var(--primary-color); /* Ligne bleu ciel */
  border-radius: 2px;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.cert-item {
  background: var(--bg-white);
  padding: 2rem;
  border-radius: var(--border-radius);
  text-align: center;
  box-shadow: var(--shadow);
  transition: all var(--transition-speed) ease;
  opacity: 0;
  transform: translateY(20px);
  border: 1px solid rgba(125, 211, 252, 0.2); /* Bordure bleu ciel très subtile */
}

.cert-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.cert-item:hover {
  transform: translateY(-5px) !important;
  box-shadow: 0 10px 25px rgba(125, 211, 252, 0.1); /* Ombre bleu ciel */
}

.cert-icon {
  width: 60px;
  height: 60px;
  background: rgba(125, 211, 252, 0.1); /* Fond bleu ciel très clair */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: all var(--transition-speed) ease;
}

.cert-item:hover .cert-icon {
  background: var(--primary-color); /* Bleu ciel au survol */
}

.cert-icon svg {
  width: 24px;
  height: 24px;
  fill: var(--primary-color); /* Icône bleu ciel */
  transition: all var(--transition-speed) ease;
}

.cert-item:hover .cert-icon svg {
  fill: var(--bg-white);
}

.cert-item h4 {
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.cert-item p {
  color: var(--text-medium);
  margin-bottom: 1rem;
}

.cert-date {
  color: var(--primary-dark); /* Bleu ciel foncé */
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: rgba(125, 211, 252, 0.1); /* Fond bleu ciel très clair */
  border-radius: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .education-timeline::before {
    left: 20px;
  }

  .education-icon {
    width: 50px;
    height: 50px;
    margin-right: 1.5rem;
  }

  .education-content {
    padding: 1.5rem;
  }

  .cert-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1.5rem;
  }

  .section-title h2 {
    font-size: 2rem;
  }

  .education-item {
    flex-direction: column;
  }

  .education-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .education-timeline::before {
    left: 25px;
    top: 30px;
    bottom: 30px;
  }

  .cert-title {
    font-size: 1.5rem;
  }
}
  `]
})
export class EducationComponent implements AfterViewInit {
  isVisible: boolean[] = [];
  isCertVisible: boolean[] = [];
  
  educations = [
    {
      period: 'Sept. 2023 – June 2026',
      degree: 'Engineering Degree in Computer Science',
      institution: 'National Higher School of Mines - Rabat',
      description: 'Comprehensive training in computer engineering with specialization in software development and information systems.',
      details: [
        'Advanced C and C++ programming',
        'Computer networks and systems architecture',
        'Information systems and database engineering',
        'Software engineering principles'
      ]
    },
    {
      period: 'Sept. 2021 – June 2023',
      degree: 'Preparatory Classes for Engineering Schools',
      institution: 'CPGE Omar Ibn Alkhattab - Meknes',
      description: 'Intensive program in mathematics, physics, and engineering sciences.',
      details: [
        'Physics and engineering sciences (PCSI/PSI)',
        'Advanced mathematics',
        'Theoretical and applied physics',
        'Preparation for national competitive exams'
      ]
    },
    {
      period: 'Sept. 2020 – June 2021',
      degree: 'Baccalaureate in Mathematical Sciences',
      institution: 'Lycée Tichoukt - Boulmane',
      description: 'Baccalaureate in Mathematical Sciences with honors.',
      details: [
        'Advanced mathematics',
        'Physics-Chemistry',
        'Computer science fundamentals',
        'Life and Earth Sciences'
      ]
    }
  ];
  certifications = [
    {
      name: 'Certification PLC Siemens',
      issuer: 'Siemens Automation',
      date: 'Juin 2022'
    },
    {
      name: 'Lean Six Sigma Green Belt',
      issuer: 'American Society for Quality (ASQ)',
      date: 'Mars 2021'
    },
    {
      name: 'AutoCAD Professional',
      issuer: 'Autodesk',
      date: 'Novembre 2020'
    },
    {
      name: 'Project Management Professional (PMP)',
      issuer: 'Project Management Institute',
      date: 'Septembre 2019'
    },
    {
      name: 'Certification en Robotique Industrielle',
      issuer: 'FANUC Robotics',
      date: 'Mai 2018'
    },
    {
      name: 'Gestion de Maintenance Assistée par Ordinateur',
      issuer: 'IBM Maximo Academy',
      date: 'Février 2017'
    }
  ];

  ngAfterViewInit() {
    this.checkVisibility();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    // Check education items
    const eduItems = document.querySelectorAll('.education-item');
    eduItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight * 0.8) && 
                       (rect.bottom >= window.innerHeight * 0.2);
      
      if (isVisible && !this.isVisible[index]) {
        setTimeout(() => {
          this.isVisible[index] = true;
        }, index * 150);
      }
    });

    // Check certification items
    const certItems = document.querySelectorAll('.cert-item');
    certItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight * 0.8) && 
                       (rect.bottom >= window.innerHeight * 0.2);
      
      if (isVisible && !this.isCertVisible[index]) {
        setTimeout(() => {
          this.isCertVisible[index] = true;
        }, index * 100);
      }
    });
  }
}