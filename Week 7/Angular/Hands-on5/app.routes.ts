import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { CourseListComponent } from './pages/course-list/course-list';
import { StudentProfile } from './pages/student-profile/student-profile';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'courses',
    component: CourseListComponent
  },
  {
    path: 'profile',
    component: StudentProfile
  },

  {
  path: 'enroll',
  loadComponent: () =>
    import('./pages/enrollment-form/enrollment-form')
      .then(m => m.Enrollmentform)
},
{
  path: 'enroll-reactive',
  loadComponent: () =>
    import('./pages/reactive-enrollment-form/reactive-enrollment-form')
      .then(m => m.ReactiveEnrollmentFormComponent)
}
];