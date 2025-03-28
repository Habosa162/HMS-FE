import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatToolbarModule,AdminLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hmsFE';
}

// bootstrapApplication(AppComponent, {
//   providers: [provideAnimations()], // Required for Material animations
// });
