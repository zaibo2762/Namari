import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ClientsComponent } from './component/clients/clients.component';
import { FooterComponent } from './component/footer/footer.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { ServicesComponent } from './component/services/services.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { NotfoundComponent } from './component/notfound/notfound.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLinkActive,RouterLink,NotfoundComponent ,AboutComponent,ClientsComponent,FooterComponent,GalleryComponent,HeaderComponent,NavComponent,PricingComponent,ServicesComponent,TestimonialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}
