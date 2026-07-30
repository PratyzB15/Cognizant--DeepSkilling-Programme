import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
selector:'app-course-list',
imports:[
CommonModule,
CourseCard
],
templateUrl:'./course-list.html',
styleUrl:'./course-list.css'
})
export class CourseList{

selectedCourseId:number=0;

courses=[

{
id:1,
name:"Angular",
code:"CS101",
credits:4
},

{
id:2,
name:"Java",
code:"CS102",
credits:3
},

{
id:3,
name:"Python",
code:"CS103",
credits:3
},

{
id:4,
name:"React",
code:"CS104",
credits:4
},

{
id:5,
name:"Machine Learning",
code:"CS105",
credits:5
}

];

onEnroll(id:number){

console.log("Enrolling in course:",id);

this.selectedCourseId=id;

}

}