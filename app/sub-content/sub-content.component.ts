import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-sub-content',
  templateUrl: './sub-content.component.html',
  styleUrls: ['./sub-content.component.scss']
})
export class SubContentComponent implements OnInit, OnDestroy {
  title = '';
  subs: Array<Subscription> = [];
  techName = 'Flexbox';

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private titleService: Title) { }

  ngOnInit() {

    // access activated child route from parent controller
    // https://stackoverflow.com/a/50780702/54159
    this.subs[0] = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route.snapshot),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
    )
    .subscribe((route: ActivatedRouteSnapshot) => {
      console.log('subi', route.data);
      this.titleService.setTitle(route.data.title);
      this.title = route.data.title;
    });    
  }

  ngOnDestroy() {
    // console.log('destroy');
    this.subs.forEach(s => s.unsubscribe());
  }

}