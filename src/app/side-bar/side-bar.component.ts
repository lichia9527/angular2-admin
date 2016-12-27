import { OnInit, Component, Input, trigger, state, style, transition, animate } from '@angular/core';


@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  animations: [
    trigger('listSlide', [
      state('in', style({ height: "*" })),
      state('out', style({ height: 0 })),
      transition('out => in', [animate(150, style({ height: '*' }))]),
      transition('in => out', [animate(150, style({ height: 0 }))]),
    ]),
    trigger('sideBarSlide',[
      state('slideIn',style({width:220})),
      state('slideOut',style({width:65})),
      transition('slideIn <=> slideOut', [animate('150ms')]),
    ]),
    trigger('iconSize',[
      state('slideIn',style({fontSize:18})),
      state('slideOut',style({fontSize:26})),
      transition('slideIn <=> slideOut', [animate('150ms')]),
    ])
  ]
})
export class SideBarComponent implements OnInit {
  @Input()
  isCollapse:Boolean; 
  constructor() {

  }

  ngOnInit() {
    
  }
}
