import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepUpdateFormComponent } from './dep-update-form.component';

describe('DepUpdateFormComponent', () => {
  let component: DepUpdateFormComponent;
  let fixture: ComponentFixture<DepUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
