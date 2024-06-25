  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { AddClassComponent } from './Class/AddClass/AddClass.component';
  import { AddGradeComponent } from './Grade/AddGrade/AddGrade.component';
  import { AddStudentComponent } from './Student/AddStudent/AddStudent.component';
  import { EditClassComponent } from './Class/EditClass/EditClass.component';
  import { EditGradeComponent } from './Grade/EditGrade/EditGrade.component';
  import { EditStudentComponent } from './Student/EditStudent/EditStudent.component';
  import { ListClassComponent } from './Class/ListClass/ListClass.component';
  import { ListGradeComponent } from './Grade/ListGrade/ListGrade.component';
  import { ListStudentComponent } from './Student/ListStudent/ListStudent.component';
  import { ChartComponent } from './MyChart/Chart/Chart.component';
  import { AddStageComponent } from './Stage/AddStage/AddStage/AddStage.component';
  import { EditStageComponent } from './Stage/EditStage/EditStage/EditStage.component';
  import { ListStageComponent } from './Stage/ListStage/ListStage/ListStage.component';
  import { LoginComponent } from './Login/login/login.component';
  import { AddTeacherComponent } from './Teacher/AddTeacher/AddTeacher/AddTeacher.component';
  import { EditTeacherComponent } from './Teacher/EditTeacher/EditTeacher/EditTeacher.component';
  import { ListTeacherComponent } from './Teacher/ListTeacher/ListTeacher/ListTeacher.component';
  import { ListDegreeComponent } from './Degree/ListDegree/ListDegree/ListDegree.component';
  import { EditDegreeComponent } from './Degree/EditDegree/EditDegree/EditDegree.component';
  import { SubjectComponent } from './Subject/ListSubject/Subject/Subject.component';
  // import { NotificationComponent } from './notification/notification.component';
  import { LogoutComponent } from './Logout/logout/logout.component';
  import { ChatComponent } from './Chat/chat/chat.component';
  import { AuthService } from './Service/auth.service';
  // import { AuthGuard } from './tttt/auth.guard';
  import { PaymentComponent } from './Payment/Payment/payment/payment.component';
  import { PaymentSuccessComponent } from './Payment/PaymentSuccess/PaymentSuccess/PaymentSuccess.component';
  // import { GpsTrackerComponent } from './gps-tracker/gps-tracker/gps-tracker.component';





  const routes: Routes = [
    // {path: '', redirectTo :'' ,pathMatch:"full"},
    {path :'chart',component :ChartComponent },
    { path: 'login', component: LoginComponent }, // Route to LoginComponent
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // { path: '', redirectTo: '/chart', pathMatch: 'full' },


    {path : 'listStudent', component : ListStudentComponent},
    {path :'editStudent/:id' ,component : EditStudentComponent},
    {path : 'addStudent',component : AddStudentComponent},

    {path :'listGrade',component :ListGradeComponent},
    {path :'editGrade/:id',component :EditGradeComponent},
    {path :'addGrade',component :AddGradeComponent},

    {path :'listClass',component :ListClassComponent},
    {path :'editClass/:id',component :EditClassComponent},
    {path :'addClass',component :AddClassComponent},

    {path :'listStage',component :ListStageComponent},
    {path :'editStage/:id',component :EditStageComponent},
    {path :'addStage',component :AddStageComponent},

    {path :'listTeacher',component :ListTeacherComponent},
    {path :'editTeacher/:id',component :EditTeacherComponent},
    {path :'addTeacher',component :AddTeacherComponent},

    {path :'listDegree',component :ListDegreeComponent},
    {path :'editDegree/:id',component :EditDegreeComponent},

    // {path :'notification',component :NotificationComponent},

    {path :'subject',component :SubjectComponent},


    {path :'login',component :LoginComponent},

    {path :'logout',component :LogoutComponent},

    {path :'chat',component :ChatComponent},

    {path :'payment',component :PaymentComponent},
    {path :'success',component :PaymentSuccessComponent},


    // {path :'Gps',component :GpsTrackerComponent},
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
