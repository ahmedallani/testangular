import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtontogglesComponent } from './buttontoggles.component';

describe('ButtontogglesComponent', () => {
  let component: ButtontogglesComponent;
  let fixture: ComponentFixture<ButtontogglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtontogglesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtontogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
