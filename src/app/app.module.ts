import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NavBarComponent } from './NavBar/NavBar/NavBar.component';
import { ListStageComponent } from './Stage/ListStage/ListStage/ListStage.component';
import { EditStageComponent } from './Stage/EditStage/EditStage/EditStage.component';
import { AddStageComponent } from './Stage/AddStage/AddStage/AddStage.component';
import { LoginComponent } from './Login/login/login.component';
import { AddTeacherComponent } from './Teacher/AddTeacher/AddTeacher/AddTeacher.component';
import { EditTeacherComponent } from './Teacher/EditTeacher/EditTeacher/EditTeacher.component';
import { ListTeacherComponent } from './Teacher/ListTeacher/ListTeacher/ListTeacher.component';
import { ListDegreeComponent } from './Degree/ListDegree/ListDegree/ListDegree.component';
import { EditDegreeComponent } from './Degree/EditDegree/EditDegree/EditDegree.component';
import { SubjectComponent } from './Subject/ListSubject/Subject/Subject.component';
// import { NotificationComponent } from './notification/notification.component';
import { SseService } from './Service/sse.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutComponent } from './Logout/logout/logout.component';
import { JwtService } from './Service/jwt.service';
import { ChatComponent } from './Chat/chat/chat.component';
import { ChatService } from './Service/chat.service';
import { AuthService } from './Service/auth.service';
import { PayPalService } from './Service/PayPal.service';
import { PaymentComponent } from './Payment/Payment/payment/payment.component';
import { PaymentSuccessComponent } from './Payment/PaymentSuccess/PaymentSuccess/PaymentSuccess.component';
// import { GpsTrackerComponent } from './gps-tracker/gps-tracker/gps-tracker.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DocumentViewerModule } from '@txtextcontrol/tx-ng-ds-document-viewer';

@NgModule({
  declarations: [
    AppComponent,
    AddClassComponent,
    AddGradeComponent,
    AddStudentComponent,
    EditClassComponent,
    EditGradeComponent,
    EditStudentComponent,
    ListClassComponent,
    ListGradeComponent,
    ListStudentComponent,
    ChartComponent,
    NavBarComponent,
    ListStageComponent,
    EditStageComponent,
    AddStageComponent,
    LoginComponent,
    AddTeacherComponent,
    EditTeacherComponent,
    ListTeacherComponent,
    ListDegreeComponent,
    EditDegreeComponent,
    SubjectComponent,
      // NotificationComponent,
      LogoutComponent,
      ChatComponent,
      PaymentComponent,
      PaymentSuccessComponent,
      // GpsTrackerComponent

   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    DocumentViewerModule,

  ],
  providers: [SseService,JwtService,ChatService,AuthService,PayPalService ],  ///empty
  bootstrap: [AppComponent]
})
export class AppModule { }
