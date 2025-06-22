import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { Navigation } from "./navigation/navigation";
import { ComponentWebentwicklung } from "./component-webentwicklung/component-webentwicklung";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, ComponentWebentwicklung],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

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
