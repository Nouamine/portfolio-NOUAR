import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact">
  <div class="container">
    <h2 class="section-title">Get In Touch</h2>
    <div class="contact-content">
      <div class="contact-info">
        <h3>Contact Information</h3>
        <div class="contact-item">
          <div class="contact-icon">📧</div>
          <div class="contact-details">
            <h4>Email</h4>
            <p>aminenouar62gmail.com</p>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">📱</div>
          <div class="contact-details">
            <h4>Phone</h4>
            <p>+212 707-769254</p>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">📍</div>
          <div class="contact-details">
            <h4>Location</h4>
            <p>Rabat, Morocco</p>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">💼</div>
          <div class="contact-details">
            <h4>LinkedIn</h4>
            <p>linkedin.com/in/amine-nouar</p> <!-- Update with your actual LinkedIn -->
          </div>
        </div>
      </div>
      
      <div class="contact-form">
        <h3>Send Me a Message</h3>
        <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
          <div class="form-group">
            <input 
              type="text" 
              name="name" 
              [(ngModel)]="formData.name"
              placeholder="Your Name"
              required
              #name="ngModel"
            >
            <div *ngIf="name.invalid && name.touched" class="error">
              Name is required
            </div>
          </div>
          
          <div class="form-group">
            <input 
              type="email" 
              name="email" 
              [(ngModel)]="formData.email"
              placeholder="Your Email"
              required
              email
              #email="ngModel"
            >
            <div *ngIf="email.invalid && email.touched" class="error">
              Valid email required
            </div>
          </div>
          
          <div class="form-group">
            <input 
              type="text" 
              name="subject" 
              [(ngModel)]="formData.subject"
              placeholder="Subject"
              required
              #subject="ngModel"
            >
            <div *ngIf="subject.invalid && subject.touched" class="error">
              Subject is required
            </div>
          </div>
          
          <div class="form-group">
            <textarea 
              name="message" 
              [(ngModel)]="formData.message"
              placeholder="Your Message"
              rows="5"
              required
              #message="ngModel"
            ></textarea>
            <div *ngIf="message.invalid && message.touched" class="error">
              Message is required
            </div>
          </div>
          
          <button 
            type="submit" 
            class="btn-submit"
            [disabled]="contactForm.invalid"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
  `,
  styles: [`
    .contact {
      padding: 80px 0;
      background: #fff;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      margin-top: 3rem;
    }

    .contact-info h3 {
      color: #1a237e;
      margin-bottom: 2rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: #f8f9fa;
      border-radius: 10px;
    }

    .contact-icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      width: 40px;
      text-align: center;
    }

    .contact-details h4 {
      color: #1a237e;
      margin-bottom: 0.5rem;
    }

    .contact-details p {
      color: #555;
      margin: 0;
    }

    .contact-form {
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 15px;
    }

    .contact-form h3 {
      color: #1a237e;
      margin-bottom: 2rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 12px 15px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #64b5f6;
    }

    .form-group textarea {
      resize: vertical;
    }

    .error {
      color: #f44336;
      font-size: 0.8rem;
      margin-top: 0.5rem;
    }

    .btn-submit {
      width: 100%;
      padding: 12px;
      background: #64b5f6;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s;
    }

    .btn-submit:hover:not(:disabled) {
      background: #42a5f5;
    }

    .btn-submit:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
      }
    }
    .section-title {
      
      text-align: center;
      
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Formulaire soumis:', this.formData);
      // Ici vous pouvez ajouter la logique pour envoyer l'email
      alert('Message envoyé avec succès!');
      form.reset();
    }
  }
}