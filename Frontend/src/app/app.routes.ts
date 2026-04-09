import { Routes } from '@angular/router';
import { AllListingsComponent } from './module/listings/all-listings/all-listings.component';
import { ShowListComponent } from './module/showListings/show-list/show-list.component';
import { SecurePaymentComponent } from './module/showListings/secure-payment/secure-payment.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './header/blogs/blogs.component';
import { ShowBlogsComponent } from './header/component/show-blogs/show-blogs.component';
import { SignInComponent } from './header/sign-in/sign-in.component';
import { CreateAccountComponent } from './header/create-account/create-account.component';
import { FavoriteComponent } from './module/favorites/favorite/favorite.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listing', component: AllListingsComponent },
  { path: 'listing/:id', component: ShowListComponent },
  { path: 'listing/:id/secure-payment', component: SecurePaymentComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogs/:id', component: ShowBlogsComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: '**', redirectTo: '' },
];
