import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  about = {
    title:"SUCCESS",
    description:"How We Help You To Sell Your Product",
    details:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!`,
    Iconblock:[
      {id:1,icon:"fa-html5",tittle:"HTML5 || CSS3",desc:`Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro
      neglegentur iudico`},
      {id:2,icon:"fa-bolt" ,tittle:"Easy to Use",desc:`Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit
      detracto mediocrem disputationi`},
      {id:3,icon:"fa-tablet",tittle:"Fully Responsive",desc:`Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro
      nemore vivendum`},
      {id:4,icon:"fa-rocket",tittle:"Parallax Effect",desc: `Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro
      nemore vivendum`}
    ]
  }

}
