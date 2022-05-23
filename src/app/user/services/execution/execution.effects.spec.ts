import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ExecutionEffects } from './execution.effects';

describe('ExecutionEffects', () => {
  let actions$: Observable<any>;
  let effects: ExecutionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExecutionEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ExecutionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
