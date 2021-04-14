import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.sass']
})
export class ShareButtonComponent implements OnInit {
  shared: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  shareClick() {
    this.shared = !this.shared;
    alert(`You clicked the button! ${this.shared}`);
  }
}
