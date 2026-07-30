import {
Component,
Input,
Output,
EventEmitter,
OnChanges,
SimpleChanges
} from '@angular/core';

@Component({
selector:'app-course-card',
imports:[],
templateUrl:'./course-card.html',
styleUrl:'./course-card.css'
})
export class CourseCard implements OnChanges{

@Input()
course:any;

@Output()
enrollRequested=new EventEmitter<number>();

ngOnChanges(changes:SimpleChanges){

console.log(
"Course Changed",
changes["course"]?.previousValue,
changes["course"]?.currentValue
);

}

enroll(){

this.enrollRequested.emit(this.course.id);

}

}