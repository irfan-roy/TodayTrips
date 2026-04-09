import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { data } from '@maptiler/sdk';
import { Router, RouterModule } from '@angular/router';
import { ToggleShowComponent } from '../../module/showListings/toggle-show/toggle-show.component';

@Component({
  selector: 'app-sign-in',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ToggleShowComponent,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  loginForm: FormGroup;
  display = false;
  logged = false;
  valid = false;

  constructor(
    private user: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
          ),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  onContinue(): void {
    const emailValid = this.loginForm.get('email')?.valid;

    if (emailValid) {
      this.display = true;
    } else {
      this.display = false;
    }
  }

  onLogin() {
    const user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.user.login(user).subscribe({
      next: (data) => {
        if (data) {
          this.logged = !this.logged;
        }
      },
      error: (err: Error) => {
        this.valid = !this.valid;
        console.log(err, 'hello');
      },
      complete: () => {
        console.log('Login request completed');
      },
    });
  }

  onGoogleSignIn(): void {
    console.log('Google sign in clicked');
    // Add Google OAuth logic here
  }

  onSignInMethod(method: string): void {
    console.log(`Sign in with ${method} clicked`);
    // Add respective OAuth logic here
  }
}
