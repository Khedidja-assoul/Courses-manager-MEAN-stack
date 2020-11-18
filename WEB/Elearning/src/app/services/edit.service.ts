import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { WebRequestService } from '../services/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(private webReqService: WebRequestService) { }

  createNewCourse(name: String,chapters:string,objectives:string,content:string){
    
    return this.webReqService.post('courses',{name,chapters,objectives,content})

  }
  deleteCourse(courseId : string){
    return this.webReqService.delete('courses',courseId)
  }

  getCourses(){
    return this.webReqService.get('courses');

  }

  getCourseById(courseId : string){
   // console.log(courseId)
    return this.webReqService.get('courses/'+courseId);
  }

  updateCourse(id: string, name: String, chapters: string, objectives: string, content: string) {

    return this.webReqService.put('courses/' + id, { name, chapters, objectives, content })

  }

}