import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAutorizeComponent } from './not-autorize.component';

describe('NotAutorizeComponent', () => {
  let component: NotAutorizeComponent;
  let fixture: ComponentFixture<NotAutorizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotAutorizeComponent]
    });
    fixture = TestBed.createComponent(NotAutorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
