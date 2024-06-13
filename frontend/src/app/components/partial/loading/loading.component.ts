import { Component, Input, OnInit } from '@angular/core';
import { LoadingService } from '../../../services/loading.service';
import { tap } from 'rxjs';
import {
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  isLoading!: boolean;

  @Input()
  detectRouteTransitions = false;

  constructor(private loadingService: LoadingService, private router: Router) {
    loadingService.isLoading.subscribe((isLoading) => {
      this.isLoading = isLoading; //! here
    });
  }
  ngOnInit() {
    if (this.detectRouteTransitions) {
      this.router.events
        .pipe(
          tap((event) => {
            if (event instanceof RouteConfigLoadStart) {
              this.loadingService.showLoading();
            } else if (event instanceof RouteConfigLoadEnd) {
              this.loadingService.hideLoading();
            }
          })
        )
        .subscribe();
    }
  }
}
