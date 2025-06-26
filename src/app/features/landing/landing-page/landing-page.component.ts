import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {
  /**
   * Navega a la página de inicio de sesión
   */
  navigateToLogin(): void {
    window.open('https://financello-web-v1.netlify.app/auth/login', '_blank');
  }

  /**
   * Navega a la página de registro
   */
  navigateToRegister(): void {
    window.open('https://financello-web-v1.netlify.app/auth/register', '_blank');
  }
}