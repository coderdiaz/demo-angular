import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  standalone: true,
  template: '<h1>Hello World</h1>',
  styles: ['h1 { color: blue; }']
})
export class HelloWorldComponent {}