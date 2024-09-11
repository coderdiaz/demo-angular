import { Component } from '@angular/core';

@Component({
  selector: 'example-events',
  standalone: true,
  imports: [],
  templateUrl: './example-events.component.html',
  styleUrl: './example-events.component.css'
})
export class ExampleEventsComponent {
  handleOnClick(event: MouseEvent) {
    console.log('Button clicked', event);
    const button = event.target as HTMLButtonElement;
    button.style.backgroundColor = 'red';
  }

  handleOnInput(event: Event) {
    console.log('Input changed', event);
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  handleOnSelect(event: Event) {
    console.log('Select changed', event);
    const select = event.target as HTMLSelectElement;
    console.log(select.value);
  }

  handleOnChangeCheckbox(event: Event) {
    console.log('Checkbox changed', event);
    const checkbox = event.target as HTMLInputElement;
    console.log(checkbox.checked);
  }
}
