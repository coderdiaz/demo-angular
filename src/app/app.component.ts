import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './hello-world.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { LifecycleExampleComponent } from './lifecycle-example/lifecycle-example.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    HelloWorldComponent,
    DirectiveExampleComponent,
    LifecycleExampleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-angular';
  name = '';
  hiddenLifecycleExample = false;
}
