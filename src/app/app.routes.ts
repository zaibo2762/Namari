import { Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ClientsComponent } from './component/clients/clients.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { HeaderComponent } from './component/header/header.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { ServicesComponent } from './component/services/services.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { NotfoundComponent } from './component/notfound/notfound.component';

export const routes: Routes = [
    {
        path:"",
        component:HeaderComponent
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"clients",
        component:ClientsComponent
    },
    {
        path:"gallery",
        component:GalleryComponent
    },
    {
        path:"home",
        component:HeaderComponent
    },
    {
        path:"pricing",
        component:PricingComponent
    },
    {
        path:"services",
        component:ServicesComponent
    },
    {
        path:"testimonials",
        component:TestimonialsComponent
    },
    {
        path:"**",
        component:NotfoundComponent
    },
];
