import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css'
})
export class Navigation {

   isVisible = true;
  lastScrollTop = 0;

  constructor(private router: Router){

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop && currentScroll > 0) {
      // Scroll nach unten, Navigation ausblenden
      this.isVisible = false;
    } else {
      // Scroll nach oben, Navigation einblenden
      this.isVisible = true;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Für Mobile oder negative Werte
  }

  public openmenu(){
    this.isVisible = true
  }

  public homerouting(){
   this.router.navigate(['']);
  }
}
