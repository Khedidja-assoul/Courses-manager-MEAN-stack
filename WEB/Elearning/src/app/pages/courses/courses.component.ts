import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EditService } from 'src/app/services/edit.service';
import { Course } from 'src/app/models/course.model';
import { WebRequestService } from 'src/app/services/web-request.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  //lists:any; 
  courses:Course[];
  couresId : string;
  course:Course;
  toDelete: string;

  constructor(private editService:EditService,private route:ActivatedRoute,private router:Router) { }
  
  ngOnInit(): void {
    
    this.course = new Course()

    this.route.params.subscribe(
      (params:Params)=>{
          if(params.courseId){
              this.couresId = params.courseId;
              //console.log('    courseId  == '+this.couresId)
              this.editService.getCourseById(this.couresId).subscribe((course : Course) =>{
                this.course = course;
              })
          }
          else{console.log('course id not exist') }
       // console.log(this.course);
      }
    )
    

this.editService.getCourses().subscribe((courses : any[]) => {
this.courses = courses;
})
}
createNewCourse(title:string,chap:string,objectives:string,content:string){
  this.editService.createNewCourse(title,chap,objectives,content).subscribe((response:any)=>{
     //console.log(response);
     this.router.navigate(['/courses']);
     this.editService.getCourses().subscribe((courses: any[]) => {
      this.courses = courses;
    })
    
  });
  

}
deleteCourse(){
  this.editService.deleteCourse(this.toDelete).subscribe((response:any)=>{
    //console.log(this.couresId);
     console.log(response);
     this.router.navigate(['/courses']);
     this.editService.getCourses().subscribe((courses: any[]) => {
      this.courses = courses;
    })
    
  });

}
idToDelete(id) {
  this.toDelete = id

}


updateCourse(id: string, title: string, chap: string, objectives: string, content: string) {
    this.editService.updateCourse(id, title, chap, objectives, content).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['/courses']);
      this.editService.getCourses().subscribe((courses: any[]) => {
        this.courses = courses;
      })

    });

  }

}