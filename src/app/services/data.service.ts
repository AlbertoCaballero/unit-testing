import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_URL = 'https://jsonplaceholder.typicode.com';
  TODOS_URL = `${this.BASE_URL}/todos`;

  constructor(private http: HttpClient) {}

  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  getTodo(todo: number): Observable<Todo> {
    return this.get(`${this.TODOS_URL}/${todo}`);
  }
}
