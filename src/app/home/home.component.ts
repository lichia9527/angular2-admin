import { OnInit, Component, Input, trigger, state, style, transition, animate } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('contentWidth', [
      state('active', style({ marginLeft: 250 })),
      state('inactive', style({ marginLeft: 95 })),
      transition('active <=> inactive', [animate('150ms')]),
    ]),
  ]
})
export class HomeComponent implements OnInit {
  isCollapse: Boolean = true;
  constructor() { }

  ngOnInit() {
  }
  onIsCollapse(collapse:Boolean) {
    this.isCollapse = collapse
  }
}
