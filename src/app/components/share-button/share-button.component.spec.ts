import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DataService } from 'src/app/services/data.service';
import { MockDataService } from 'src/app/services/data.service.mock';

import { ShareButtonComponent } from './share-button.component';

describe('ShareButtonComponent', () => {
  let component: ShareButtonComponent;
  let fixture: ComponentFixture<ShareButtonComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ShareButtonComponent],
        providers: [
          {
            provide: DataService,
            useClass: MockDataService,
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create share button', () => {
    expect(component).toBeTruthy();
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
