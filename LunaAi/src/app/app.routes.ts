import { Routes } from '@angular/router';
import { LandingComponent } from './Pages/landing/landing.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { ChatPageComponent } from './Pages/chat-page/chat-page.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'chatPage', component: ChatPageComponent },
    { path: '**', redirectTo: '' }
];
