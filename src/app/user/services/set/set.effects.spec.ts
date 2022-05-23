import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SetEffects } from './set.effects';

describe('SetEffects', () => {
  let actions$: Observable<any>;
  let effects: SetEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SetEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SetEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
