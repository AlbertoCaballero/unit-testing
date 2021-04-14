import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareButtonComponent } from './share-button.component';

describe('ShareButtonComponent', () => {
  let component: ShareButtonComponent;
  let fixture: ComponentFixture<ShareButtonComponent>;

  it('should create share button', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#shareClick() should alert the user', () => {
    expect(component.shared).toBe(false, 'False at firs');
    component.shareClick();
    expect(component.shared).toBe(true, 'True after clicked');
    component.shareClick();
    expect(component.shared).toBe(false, 'False again after clicked a second time');
  });

  it('should call an alert', () => {
    spyOn(window, "alert");
    component.shareClick();
    expect(window.alert).toHaveBeenCalledWith('You clicked the button! true');
  })
});
