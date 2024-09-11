import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './hello-world.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { LifecycleExampleComponent } from './lifecycle-example/lifecycle-example.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExampleService } from './services/example.service';
import { Observable } from 'rxjs';
import { ExampleEventsComponent } from './example-events/example-events.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    HelloWorldComponent,
    DirectiveExampleComponent,
    LifecycleExampleComponent,
    ExampleEventsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'demo-angular';
  name = '';
  hiddenLifecycleExample = false;
  characters$: Observable<any>;

  constructor(
    private exampleService: ExampleService,
  ) {
    this.characters$ = this.exampleService.example$;
  }

  ngOnInit() {
    this.exampleService
      .getCharacters()
      .subscribe();
  }
}
