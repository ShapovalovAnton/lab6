import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonText } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
   imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, FormsModule, IonText, CommonModule]
})
export class AuthPage {
  email = '';
  password = '';
  errorMessage = '';


  constructor(private router: Router) {}

  async signIn() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
      console.log("Вхід успішний:", userCredential.user);
      this.router.navigateByUrl('/home');
    } catch (error) {
      const message = (error as any).message;
      console.error("Помилка входу:", message);
      this.errorMessage = "Помилка входу";
    }
  }
}
