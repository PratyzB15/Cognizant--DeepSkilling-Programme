import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrolledCourseIds: number[] = [];

  enroll(id: number): void {

    if (!this.enrolledCourseIds.includes(id)) {
      this.enrolledCourseIds.push(id);
    }
  }

  unenroll(id: number): void {

    this.enrolledCourseIds =
      this.enrolledCourseIds.filter(
        courseId => courseId !== id
      );
  }

  isEnrolled(id: number): boolean {

    return this.enrolledCourseIds.includes(id);
  }

  getEnrolledCourses(): number[] {

    return this.enrolledCourseIds;
  }
}