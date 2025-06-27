import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-component-webentwicklung',
  templateUrl: './component-webentwicklung.html',
  styleUrls: ['./component-webentwicklung.css'] // <== style**Urls**
})
export class ComponentWebentwicklung {

  isMobileDevice: boolean = false;

  constructor() {
    // Initial prüfen
    this.isMobileDevice = this.isMobile();

    // Event Listener setzen
    window.matchMedia("(max-width: 1300px)").addEventListener("change", (event) => {
      this.isMobileDevice = event.matches;
    });
  }

  // Methode innerhalb der Klasse (ohne `function`)
  isMobile(): boolean {
    return window.matchMedia("(max-width: 1300px)").matches;
  }
}