import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-component-fullnavigation',
  imports: [],
  templateUrl: './component-fullnavigation.html',
  styleUrl: './component-fullnavigation.css'
})
export class ComponentFullnavigation {

  constructor(private route: ActivatedRoute, private router: Router) {}
  protected title = 'beiDavid';
  erstenavigation: boolean = true;

  ngOnInit() {
    // Überprüfen, welche Route aktiv ist
    this.router.events.subscribe(event => {
   if (event.constructor.name === 'NavigationEnd') {
        // Überprüfen, ob die Route 'webentwicklung' ist
        if (this.router.url.includes('webentwicklung')) {
          this.erstenavigation = false;
        } else {
          this.erstenavigation = true;
        }
      }
      // Hier kannst du bestimmte Variablen basierend auf der Route definieren
    });
  }

  navigateTowebentwicklung() {
    console.log("test0")
    this.erstenavigation = false;
    this.router.navigate(['/webentwicklung']);
  }
}
