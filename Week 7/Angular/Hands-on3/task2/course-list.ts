import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';

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
export class CourseListComponent implements OnInit {

  isLoading = true;

  selectedCourseId: number | null = null;

  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Java',
      code: 'CS102',
      credits: 3,
      gradeStatus: 'pending'
    },
    {
      id: 3,
      name: 'Python',
      code: 'CS103',
      credits: 4,
      gradeStatus: 'failed'
    },
    {
      id: 4,
      name: 'React',
      code: 'CS104',
      credits: 2,
      gradeStatus: 'passed'
    },
    {
      id: 5,
      name: 'Spring Boot',
      code: 'CS105',
      credits: 5,
      gradeStatus: 'pending'
    }
  ];

  constructor() {
    console.log("CourseListComponent Constructor Called");
  }

  ngOnInit(): void {

    console.log("ngOnInit Called");
    console.log("Courses:", this.courses);

    setTimeout(() => {

      console.log("Loading Finished");

      this.isLoading = false;

      console.log("isLoading =", this.isLoading);

    }, 1500);

  }

  onEnroll(id: number): void {

    console.log("Enroll Clicked:", id);

    this.selectedCourseId = id;

  }

  trackByCourseId(index: number, course: any): number {

    return course.id;

  }

}