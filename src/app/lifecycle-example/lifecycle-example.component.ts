import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'lifecycle-example',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-example.component.html',
  styleUrl: './lifecycle-example.component.css'
})
export class LifecycleExampleComponent implements OnChanges {
  @Input() name!: string;

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
