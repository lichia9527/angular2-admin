import { Component, OnInit } from '@angular/core';
import {  } from '@angular/common';

export class SideBar {
  icon: string;
  name: string;
  children: any;
}


@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  sideBarElms: SideBar[] = [
    { icon: 'home', name: 'Dashboard', children: [] },
    { icon: 'mode_edit', name: 'Form', children: [{ icon: 'lens', name: 'Form Elements' }, { icon: 'lens', name: 'Form Validation' }, { icon: 'lens', name: 'Form Wizard' }, { icon: 'lens', name: 'Form Layouts' }] },
    { icon: 'view_quilt', name: 'Layout', children: [] },
    { icon: 'view_list', name: 'Tables', children: [] },
    { icon: 'web_asset', name: 'Pages', children: [] },
    { icon: 'playlist_add', name: 'Others', children: [] },
  ]
  constructor() {

  }

  ngOnInit() {

  }
}
