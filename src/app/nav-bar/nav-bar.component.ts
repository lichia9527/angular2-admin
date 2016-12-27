import { Component, OnInit ,Output,EventEmitter, Input, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger('collapse1',[
      state('in',style({fontSize:20})),
      state('out',style({fontSize:26})),
      transition('in <=> out', [animate('150ms')]),
    ]),
    trigger('collapse2',[
      state('in',style({width:220})),
      state('out',style({width:65})),
      transition('in <=> out', [animate('150ms')]),
    ]),
    trigger('collapse3',[
      state('in',style({paddingLeft:220})),
      state('out',style({paddingLeft:95})),
      transition('in <=> out', [animate('150ms')]),
    ]),
  ]
})
export class NavBarComponent implements OnInit {
  isCollapse:Boolean=true;
  @Output()
  onIsCollapse = new EventEmitter<Boolean>();
  constructor() { }

  ngOnInit() {
    
  }
  collapse(){
    this.isCollapse=!this.isCollapse;
    this.onIsCollapse.emit(this.isCollapse);
  }
}
