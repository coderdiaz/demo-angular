import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleEventsComponent } from './example-events.component';

describe('ExampleEventsComponent', () => {
  let component: ExampleEventsComponent;
  let fixture: ComponentFixture<ExampleEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExampleEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
