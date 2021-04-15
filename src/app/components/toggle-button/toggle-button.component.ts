import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.sass']
})
export class ToggleButtonComponent implements OnInit {

  value: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  toggleValue = () => this.value = !this.value;

  buttonColor(): string {
    return this.value ? 'green' : 'red';
  }
}
