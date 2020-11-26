import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlockingComponent } from './flocking.component';

describe('FlockingComponent', () => {
  let component: FlockingComponent;
  let fixture: ComponentFixture<FlockingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlockingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
