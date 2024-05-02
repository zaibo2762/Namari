import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  foot = {
    title:"Made For Learning Angular",
    social:[
      {id : 1,url:"https://www.facebook.com/username",name:"Facebook",icon:"fa-facebook"},
      {id : 2,url:"http://google.com/+username",name:"Google",icon:"fa-google-plus"},
      {id : 3,url:"http://www.twitter.com/username",name:"Twitter",icon:"fa-twitter"},
      {id : 4,url:"http://www.instagram.com/username",name:"Instagram",icon:"fa-instagram"},
      {id : 5,url:"www.behance.net",name:"Behance",icon:"fa-behance"},
    ]
  }

}
