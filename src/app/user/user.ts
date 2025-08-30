import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentChecked, OnDestroy {

  constructor(private router: Router) {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // user for components input property
    console.log('1. ngOnChanges called');
  }

  ngOnInit() {
    // component initialization
    console.log('2. ngOnInit called');
  }

  ngDoCheck(): void {
    // detect and act upon changes that Angular can't or won't detect on its own
    console.log('3. ngDoCheck called');
  }

  ngAfterContentInit(): void {
    // respond after Angular projects external content into the component's view
    console.log('4. ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    // respond after Angular checks the content projected into the component
    console.log('5. ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    // respond after Angular initializes the component's views and child views
    console.log('6. ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    // respond after Angular checks the component's views and child views
    console.log('7. ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    // cleanup just before Angular destroys the component
    console.log('8. ngOnDestroy called');
  }

  loginData() {
    this.router.navigate(['/structural-directive']);
  }
}

