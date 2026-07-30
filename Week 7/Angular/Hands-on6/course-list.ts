import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCardComponent }
from '../../components/course-card/course-card';

import { CourseService }
from '../../services/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCardComponent
  ],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.css']
})
export class CourseListComponent
implements OnInit {

  isLoading = true;

  selectedCourseId:
    number | null = null;

  courses: any[] = [];

  constructor(
    private courseService:
    CourseService
  ) {

    console.log(
      'CourseListComponent Constructor Called'
    );
  }

  ngOnInit(): void {

    console.log(
      'ngOnInit Called'
    );

    // Fetch courses from service
    this.courses =
      this.courseService
        .getCourses();

    console.log(
      'Courses:',
      this.courses
    );

    // Stop loading
    this.isLoading = false;

    console.log(
      'isLoading =',
      this.isLoading
    );
  }

  onEnroll(
    id: number
  ): void {

    console.log(
      'Enroll Clicked:',
      id
    );

    this.selectedCourseId =
      id;
  }

  trackByCourseId(
    index: number,
    course: any
  ): number {

    return course.id;
  }
}