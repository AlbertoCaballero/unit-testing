import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleButtonComponent } from './toggle-button.component';

describe('ToggleButtonComponent', () => {
  let component: ToggleButtonComponent;
  let fixture: ComponentFixture<ToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create toggle-button component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle #value', () => {
    expect(component.value).toBeFalse();
    component.toggleValue();
    expect(component.value).toBeTrue();
    component.toggleValue();
    expect(component.value).toBeFalse();
  });

  it('should return differen colors based on value', () => {
    expect(component.buttonColor()).toBe('red', 'red when value is false');
    component.toggleValue();
    expect(component.buttonColor()).toBe('green', 'green when value is true');
  });
});
