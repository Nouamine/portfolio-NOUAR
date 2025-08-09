import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about">
  <div class="container">
    <h2 class="section-title">About Me</h2>
    <div class="about-content">
      <div class="about-text">
        <p>
          Computer Engineering graduate with specialization in Artificial Intelligence 
          and Machine Learning. I possess strong foundations in data science, algorithms, 
          and developing innovative AI-powered solutions.
        </p>
        <p>
          My academic journey and practical projects have equipped me with advanced technical 
          skills and a structured problem-solving approach. I thrive on technical challenges 
          that allow me to implement cutting-edge technologies while expanding my expertise 
          in intelligent systems development.
        </p>
        <div class="stats">
          <div class="stat">
            <h3>3+</h3>
            <p>Years of engineering training</p>
          </div>
          <div class="stat">
            <h3>12+</h3>
            <p>Technical projects completed</p>
          </div>
          <div class="stat">
            <h3>2</h3>
            <p>Professional internships</p>
          </div>
        </div>
      </div>
      <div class="about-skills">
        <h3>Core Competencies</h3>
        <ul>
          <li>Machine/Deep Learning Systems</li>
          <li>Python Development</li>
          <li>Data Processing (Pandas, NumPy)</li>
          <li>AI Frameworks (TensorFlow, PyTorch)</li>
          <li>Full-Stack Web Development</li>
          <li>SQL/NoSQL Databases</li>
          <li>Predictive Analytics</li>
          <li>Agile Development (SCRUM)</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  `,
  styles: [`
    .about {
      padding: 80px 0;
      background: linear-gradient(135deg, #ffffff, #e0e7ff);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      color: #1a237e;
      margin-bottom: 3rem;
      position: relative;
    }

    .section-title::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: #64b5f6;
    }

    .about-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    .about-text p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #555;
      margin-bottom: 1.5rem;
    }

    .stats {
      display: flex;
      gap: 2rem;
      margin-top: 2rem;
    }

    .stat {
      text-align: center;
      background: linear-gradient(135deg, #7dd3fc, #e0e7ff);
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .stat h3 {
      font-size: 2rem;
      color: #1a237e;
      margin-bottom: 0.5rem;
    }

    .stat p {
      color: #666;
      font-size: 0.9rem;
    }

    .about-skills {
      background: linear-gradient(135deg, #7dd3fc, #e0e7ff);
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    .about-skills h3 {
      color: #1a237e;
      margin-bottom: 1.5rem;
    }

    .about-skills ul {
      list-style: none;
      padding: 0;
    }

    .about-skills li {
      padding: 0.5rem 0;
      color: #555;
      position: relative;
      padding-left: 1.5rem;
    }

    .about-skills li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #64b5f6;
      font-weight: bold;
    }

    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
      }
      
      .stats {
        flex-direction: column;
      }
    }
  `]
})
export class AboutComponent {}