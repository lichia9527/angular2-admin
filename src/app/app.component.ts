import { OnInit, Component, Input, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('contentWidth', [
      state('active', style({ marginLeft: 250 })),
      state('inactive', style({ marginLeft: 95 })),
      transition('active <=> inactive', [animate('150ms')]),
    ]),
  ]
})
export class AppComponent implements OnInit {
  isCollapse: Boolean = true;
  ngOnInit() {
  }
  onIsCollapse(collapse:Boolean) {
    this.isCollapse = collapse
  }
}
