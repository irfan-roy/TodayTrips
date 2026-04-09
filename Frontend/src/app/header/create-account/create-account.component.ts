import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToggleShowComponent } from '../../module/showListings/toggle-show/toggle-show.component';

@Component({
  selector: 'app-create-account',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ToggleShowComponent,
  ],

  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
})
export class CreateAccountComponent {
  loginForm: FormGroup;
  display = false;
  registered = false;
  constructor(private user: UserService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      user: ['', [Validators.required]],
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

  onRegister(): void {
    // const user = {
    //   email: this.loginForm.value.email,
    //   password: this.loginForm.value.password,
    // };
    const user = {
      username: this.loginForm.value.user,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.user.Register(user).subscribe((data) => {
      if (data) this.registered = !this.registered;
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
