
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';

//import { EditComponent } from './pages/courses/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
{path :"",redirectTo:'login',pathMatch:'full'},
//{path:"course/add/:id",component: EditComponent},
//{path:"course/edit/:id",component:EditComponent},
{path:'login',component:LoginPageComponent},
//{path:'courses/:courseId',component:CoursesComponent},
{path:'courses',component:CoursesComponent},
{path:'courses/:courseId',component:CoursesComponent},
{path:'course/:courseId',component:CoursesComponent},


{path:'test',component:TestComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
