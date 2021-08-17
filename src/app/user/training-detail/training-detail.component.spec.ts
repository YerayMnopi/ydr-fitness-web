import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { TrainingDetailComponent } from './training-detail.component';

describe('TrainingDetailComponent', () => {
  let component: TrainingDetailComponent;
  let fixture: ComponentFixture<TrainingDetailComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingDetailComponent ],
      providers: [
        {provide: ActivatedRoute, useFactory: () => {
          const activatedRoute = new ActivatedRoute();
          activatedRoute.data = of()
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have training data', () => {
    expect(component.training).toBeTruthy();
  })
});
