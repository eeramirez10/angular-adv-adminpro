import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements  OnDestroy {
  intervalSubs: Subscription;

  constructor() {


    this.intervalSubs = this.retornaIntervalo()
      .subscribe( 
        value => console.log(value),
        error => console.log(error),
        () => console.log('termino proceso')
      )
    /* this.retornaObs()
    .pipe(
      retry()
    )
    .subscribe(
      valor => console.log('Subs: ', valor),
      error => console.error('Error: ', error),
      () => console.info('Proceso terminado')

    ) */

  }
  ngOnDestroy(): void {
    
    this.intervalSubs.unsubscribe()
      
  }


  retornaIntervalo(): Observable<number>{

    return interval(500)
    .pipe(
      filter(value => value % 2 !== 0),
      /* take(10), */
      map( value => value + 1),
    )

  }

  retornaObs():Observable<number> {
    let i = 0;
    return new Observable<number>(observer => {
      
      let fuckingInterval = setInterval(() => {

        observer.next(i++)

        if (i > 4) {
          clearInterval(fuckingInterval);
          observer.complete();
        }

        if (i > 2) {
          observer.error('Hubo un fucking error');
        }

      }, 1000)
    })

    
  }

}
