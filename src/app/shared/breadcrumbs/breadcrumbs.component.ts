import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {

  public title:string;
  public titliSubs$: Subscription;

  constructor(private router:Router){
   this.titliSubs$ = this.getDataRutas()
      .subscribe( value =>{
        this.title = value.title
        document.title = value.title;
      })
  }

  ngOnInit(): void {
  }

  getDataRutas(){
   return  this.router.events
    .pipe( 
      filter( event => event instanceof ActivationEnd ),
      map( value => value['snapshot'].data),
      filter( value => value.title)
    )
    
  }

}
