import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.sass']
})
export class ShareButtonComponent implements OnInit {
  shared: boolean = false;
  todo: Todo | undefined;

  constructor(private dataService: DataService) {
    this.dataService.getTodo(1).subscribe(todo => {
      this.todo = todo;
    });
  }

  ngOnInit(): void {
  }

  shareClick() {
    this.shared = !this.shared;
    alert(`You clicked the button! ${this.shared}`);
  }
}
