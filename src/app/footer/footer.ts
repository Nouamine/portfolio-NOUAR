import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>NOUAR Amine</h3>
            <p>Software Engineer passionate about innovation and technical excellence.</p>
            <div class="social-links">
              <a href="#" class="social-link">LinkedIn</a>
              <a href="#" class="social-link">GitHub</a>
              <a href="#" class="social-link">Twitter</a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="home">Home</a></li>
              <li><a href="about">About</a></li>
              <li><a href="experience">Experience</a></li>
              <li><a href="projects">Projects</a></li>
              <li><a href="contact">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Skills</h4>
            <ul>
              
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Contact</h4>
            <p>📧 amine.nouar&#64;example.com</p>
            <p>📱 +212 6XX XXX XXX</p>
            <p>📍 Rabat, Morocco</p>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 NOUAR Amine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
   // Modified variables for white and sky blue theme
$footer-bg: #ffffff; // White background
$primary-blue: #7dd3fc; // Sky blue
$light-blue: #38bdf8; // Stronger sky blue
$light-blue-hover: #0ea5e9; // Darker blue on hover
$text-light: #64748b; // Light gray text
$text-dark: #1e293b; // Dark gray text
$white: #ffffff;
$border-color: #e2e8f0; // Light gray border
$transition-speed: 0.3s;

.footer {
  background: linear-gradient(135deg, $footer-bg, $primary-blue);
  color: $text-dark;
  padding: 3rem 0 1rem;
  position: relative;
  overflow: hidden;
  border-top: 1px solid $border-color;

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 2rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  .footer-section {
    margin-bottom: 1.5rem;

    h3, h4 {
      color: $light-blue; // Sky blue titles
      margin-bottom: 1.5rem;
      position: relative;
      display: inline-block;

      &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 40px;
        height: 2px;
        background: $light-blue;
        border-radius: 1px;
      }
    }

    p {
      color: $text-light;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin-bottom: 0.8rem;
      transition: transform $transition-speed ease;
      
      &:hover {
        transform: translateX(5px);
      }
    }

    a {
      color: $text-dark;
      text-decoration: none;
      transition: all $transition-speed ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:hover {
        color: $light-blue;
      }
    }
  }

  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
  }

  .social-link {
    background: rgba($light-blue, 0.1);
    color: $light-blue;
    padding: 0.6rem 1rem;
    border-radius: 6px;
    text-decoration: none;
    transition: all $transition-speed ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid rgba($light-blue, 0.3);

    &:hover {
      background: $light-blue;
      color: $white;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba($light-blue, 0.2);
    }
  }

  .footer-bottom {
    border-top: 1px solid $border-color;
    padding-top: 2rem;
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem 2rem 0;

    p {
      color: $text-light;
      margin: 0.5rem 0;
      font-size: 0.9rem;
    }
  }

  // Animation for elements
  .footer-section {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;

    @for $i from 1 through 4 {
      &:nth-child(#{$i}) {
        animation-delay: #{$i * 0.15}s;
      }
    }
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
  `]
})
export class FooterComponent {}
