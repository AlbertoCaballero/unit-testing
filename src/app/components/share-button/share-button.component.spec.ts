import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

import { ShareButtonComponent } from './share-button.component';

describe('ShareButtonComponent', () => {
  let component: ShareButtonComponent;
  let fixture: ComponentFixture<ShareButtonComponent>;
  let de: DebugElement;
  let service: DataService;
  let spy: jasmine.Spy;

  it('should create share button', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(async () => {
    TestBed.configureTestingModule({
      // imports: [HttpClient],
      declarations: [ShareButtonComponent],
      providers: [DataService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareButtonComponent);
    component = fixture.componentInstance;
    service = de.injector.get(DataService);
    spy = spyOn(service, 'getTodo').and.returnValue(of('{ id: 1 }'))
    fixture.detectChanges();
  });

  it('should call getTodo of DataService and update local todo', () => {
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length).toEqual(1);
    expect(component.todo).toBe('{ id: 1 }');
  });

  it('#shareClick() should alert the user', () => {
    expect(component.shared).toBe(false, 'False at firs');
    component.shareClick();
    expect(component.shared).toBe(true, 'True after clicked');
    component.shareClick();
    expect(component.shared).toBe(
      false,
      'False again after clicked a second time'
    );
  });

  it('should call an alert', () => {
    spyOn(window, 'alert');
    component.shareClick();
    expect(window.alert).toHaveBeenCalledWith('You clicked the button! true');
  });
});
