import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CourseCardComponent } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCardComponent
  ],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.css']
})
export class CourseListComponent implements OnInit {

  isLoading = true;

  errorMessage = '';

  searchTerm = '';

  selectedCourseId: number | null = null;

  courses: any[] = [];

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.searchTerm =
      this.route.snapshot.queryParamMap.get('search') ?? '';

    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
      },

      error: (err) => {
        this.errorMessage = err.message;
      },

      complete: () => {
        this.isLoading = false;
      }
    });
  }

  search(): void {
    this.router.navigate(
      ['courses'],
      {
        queryParams: {
          search: this.searchTerm
        }
      }
    );
  }

  goToCourse(id: number): void {
    this.router.navigate(['courses', id]);
  }

  onEnroll(id: number): void {
    this.selectedCourseId = id;
  }

  trackByCourseId(
    index: number,
    course: any
  ): number {
    return course.id;
  }
}