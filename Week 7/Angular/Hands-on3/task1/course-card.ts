import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
styleUrls: ['./course-card.css']
})
export class CourseCardComponent {

  @Input()
  course!: any;

  @Output()
  enrollRequested = new EventEmitter<number>();

}