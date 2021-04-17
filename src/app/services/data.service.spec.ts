import { HttpClientModule, HttpClient, HttpResponse, } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { Todo } from '../models/todo.model';

const falseTodo = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
} as Todo;

describe('DataService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;
  let mockId: number | undefined, mockTodo: Todo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(inject([DataService], (s: DataService) => {
    service = s;
  }));

  beforeEach(() => {
    mockTodo = falseTodo;
    mockId = falseTodo.id;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTodo', () => {
    it('should return mock todo', () => {
      service.getTodo(1).subscribe((todo: Todo) => {
        expect(todo.title).toEqual(mockTodo.title), fail
      });
      const request = httpTestingController.expectOne(`${service.TODOS_URL}/${mockId}`);
      expect(request.request.method).toEqual('GET');
      request.flush(mockTodo);
    });
  });
});
