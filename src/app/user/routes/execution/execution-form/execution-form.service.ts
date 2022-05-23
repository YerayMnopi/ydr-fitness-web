import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ExecutionFormService {
  counter!: number | undefined;
  timerRef: any;
  running: boolean = false;

  countDown(waitingTime: number): Observable<string | null> {
    this.clearTimer();
    const remainingTimeSubject = new Subject<string | null>();
    const startTime = Date.now() - (this.counter || 0);
    this.timerRef = setInterval(
      () => {
        this.counter = Date.now() - startTime;
        const remainingTime = (waitingTime * 1000) - this.counter
        remainingTimeSubject.next((remainingTime / 1000).toFixed(0));

        if (remainingTime <= 0) {
          this.emitSound(0.75);
          this.clearTimer();
          remainingTimeSubject.next(null);
          remainingTimeSubject.complete();
        } else if (remainingTime < 4000) {
          this.emitSound(0.2);
        }
      },
      1000
    );
    return remainingTimeSubject.asObservable();
  }

  clearTimer() {
    this.running = false;
    this.counter = undefined;
    clearInterval(this.timerRef);
  }

  emitSound(duration: number) {
    var context = new AudioContext();
    var o = context.createOscillator();
    var  g = context.createGain();
    var frequency = 440.0;
    o.frequency.value = frequency;
    o.connect(g);
    g.connect(context.destination);
    o.start(0);
    o.stop(duration);
  }

}
