import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pablodev-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  ngOnInit(): void {
    console.log('init nav init')
  }
}
