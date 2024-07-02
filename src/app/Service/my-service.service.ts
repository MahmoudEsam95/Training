import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, of, tap } from 'rxjs';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {



  private baseUrl: string = 'https://localhost:44384';  //5263  //44384  //7040

  constructor(private HttpClient: HttpClient,private route: ActivatedRoute,private router:Router) { }



    //////////////////////////////                ClassSubject

    getlastIdClassSubject(): Observable<any> {
      return this.HttpClient.get<any>(
        `${this.baseUrl}/ClassSubject/GetLastId/`);
    }

    getAllClassSubject(data:any): Observable<any> {
      return this.HttpClient.get<any>(`${this.baseUrl}/ClassSubject/GetAll`,data);
    }

    getClassSubjectById(id: number): Observable<any> {
      return this.HttpClient.get<any>(`${this.baseUrl}/ClassSubject/GetByID?id=${id}`);
    }
    editClassSubject(id: number, data: any): Observable<any> {
      return this.HttpClient.put<any>(`${this.baseUrl}/ClassSubject/Edit/${id}`, data);
    }
    createClassSubject(data: any): Observable<any> {
      return this.HttpClient.post<any>(`${this.baseUrl}/ClassSubject/Create`, data);
    }

    deleteClassSubjectById(id: number): Observable<any> {
      return this.HttpClient.delete<any>(`${this.baseUrl}/ClassSubject/Delete/${id}`);
    }

    GetClassSubjectByTeacherId(teacherId: number): Observable<any> {
      return this.HttpClient.get<any>(`${this.baseUrl}/ClassSubject/GetTeacherWorkByTeacherId/${teacherId}`);
    }


   //////////////////////////////                TeacherWork


  // GetTeacherWorkByTeacherId(teacherId: number): Observable<any> {
  //   return this.HttpClient.get<any>(`${this.baseUrl}/TeacherWork/GetTeacherWorkByTeacherId/${teacherId}`);
  // }

  // getlastIdTeacherWork(): Observable<any> {
  //   return this.HttpClient.get<any>(
  //     `${this.baseUrl}/TeacherWork/GetLastId/`);
  // }

  // getAllTeacherWork(data:any): Observable<any> {
  //   return this.HttpClient.get<any>(`${this.baseUrl}/TeacherWork/GetAll`,data);
  // }

  // getTeacherWorkById(id: number): Observable<any> {
  //   return this.HttpClient.get<any>(`${this.baseUrl}/TeacherWork/GetByID?id=${id}`);
  // }
  // editTeacherWork(id: number, data: any): Observable<any> {
  //   return this.HttpClient.put<any>(`${this.baseUrl}/TeacherWork/Edit/${id}`, data);
  // }
  // createTeacherWork(data: any): Observable<any> {
  //   return this.HttpClient.post<any>(`${this.baseUrl}/TeacherWork/Create`, data);
  // }

  // deleteTeacherWorkById(Id:number): Observable<any> {
  //   return this.HttpClient.delete<any>(`${this.baseUrl}/TeacherWork/Delete/${Id}`);
  // }


    //////////////////////////////                GradeSubject

    getlastIdGradeSubject(): Observable<any> {
      return this.HttpClient.get<any>(
        `${this.baseUrl}/GradeSubject/GetLastId/`);
    }

    getAllGradeSubject(data:any): Observable<any> {
      return this.HttpClient.get<any>(`${this.baseUrl}/GradeSubject/GetAll`,data);
    }

    getGradeSubjectById(id: number): Observable<any> {
      return this.HttpClient.get<any>(`${this.baseUrl}/GradeSubject/GetByID?id=${id}`);
    }
    editGradeSubject(id: number, data: any): Observable<any> {
      return this.HttpClient.put<any>(`${this.baseUrl}/GradeSubject/Edit/${id}`, data);
    }
    createGradeSubject(data: any): Observable<any> {
      return this.HttpClient.post<any>(`${this.baseUrl}/GradeSubject/Create`, data);
    }

    deleteGradeSubjectById(id: number): Observable<any> {
      return this.HttpClient.delete<any>(`${this.baseUrl}/GradeSubject/Delete/${id}`);
    }

   //////////////////////////////                Degree



  getlastIdDegree(): Observable<any> {
    return this.HttpClient.get<any>(
      `${this.baseUrl}/Degree/GetLastId/`);
  }

  getAllDegree(data:any): Observable<any> {
    return this.HttpClient.get<any>(`${this.baseUrl}/Degree/GetAll`,data);
  }

  getDegreesByStudentId(studentId: number): Observable<any> {
    return this.HttpClient.get<any>(`${this.baseUrl}/Degree/GetDegreesByStudentId/${studentId}`);
  }
  getDegreeById(id: number): Observable<any> {
    return this.HttpClient.get<any>(`${this.baseUrl}/Degree/GetByID?id=${id}`);
  }
  editDegree(id: number, data: any): Observable<any> {
    return this.HttpClient.put<any>(`${this.baseUrl}/Degree/Edit/${id}`, data);
  }
  createDegree(data: any): Observable<any> {
    return this.HttpClient.post<any>(`${this.baseUrl}/Degree/Create`, data);
  }

  deleteDegreeById(Id: number): Observable<any> {
    return this.HttpClient.delete<any>(`${this.baseUrl}/Degree/Delete/${Id}`);
  }

  //////////////////////////////                Teacher



  getlastIdTeacher(): Observable<any> {
    return this.HttpClient.get<any>(
      `${this.baseUrl}/Teacher/GetLastId/`);
  }

  getAllTeacher(data:any): Observable<any> {
    return this.HttpClient.get<any>(`${this.baseUrl}/Teacher/GetAll`,data);
  }

  getTeacherById(id: number): Observable<any> {
    return this.HttpClient.get<any>(`${this.baseUrl}/Teacher/GetByID?id=${id}`);
  }
  editTeacher(id: number, data: any): Observable<any> {
    return this.HttpClient.put<any>(`${this.baseUrl}/Teacher/Edit/${id}`, data);
  }
  createTeacher(data: any): Observable<any> {
    return this.HttpClient.post<any>(`${this.baseUrl}/Teacher/Create`, data);
  }

  deleteTeacherById(id: number): Observable<any> {
    return this.HttpClient.delete<any>(`${this.baseUrl}/Teacher/Delete/${id}`);
  }

  //////////////////////////////                Subject



  getlastIdSubject(): Observable<any> {
    return this.HttpClient.get<any>(
      `${this.baseUrl}/Subject/GetLastId/`);
  }

  getAllSubject(data:any): Observable<any> {
    return this.HttpClient.get<any>(`${this.baseUrl}/Subject/GetAll`,data);
  }

  getSubjectById(id: number): Observable<any> {
    return this.HttpClient.get<any>(`${this.baseUrl}/Subject/GetByID?id=${id}`);
  }
  editSubject(id: number, data: any): Observable<any> {
    return this.HttpClient.put<any>(`${this.baseUrl}/Subject/Edit/${id}`, data);
  }
  createSubject(data: any): Observable<any> {
    return this.HttpClient.post<any>(`${this.baseUrl}/Subject/Create`, data);
  }

  deleteSubjectById(id: number): Observable<any> {
    return this.HttpClient.delete<any>(`${this.baseUrl}/Subject/Delete/${id}`);
  }


//////////////                    Student

getlastIdStudent(): Observable<any> {
  return this.HttpClient.get<any>(
    `${this.baseUrl}/Student/GetLastId/`);
}
//// new
getStudentPdf(id: number): Observable<Blob> {
  return this.HttpClient.get(`${this.baseUrl}/Student/PdfbyID?id=${id}`, { responseType: 'blob' });
}


getAllStudents(data:any): Observable<any> {
  return this.HttpClient.get<any>(`${this.baseUrl}/Student/GetAll`,data);
}

getStudentById(id: number): Observable<any> {
  return this.HttpClient.get<any>(`${this.baseUrl}/Student/GetByID?id=${id}`);
}
editStudent(id: number, data: any): Observable<any> {
  return this.HttpClient.put<any>(`${this.baseUrl}/Student/Edit/${id}`, data);
}
createStudent(data: any): Observable<any> {
  return this.HttpClient.post<any>(`${this.baseUrl}/Student/Create`, data);
}
deleteStudentById(id: number): Observable<any> {
  return this.HttpClient.delete<any>(`${this.baseUrl}/Student/Delete/${id}`);
}


////////////////////              Grade

getlastIdGrade(): Observable<any> {
  return this.HttpClient.get<any>(
    `${this.baseUrl}/Grade/GetLastId/`);
}

getAllGradesbyStageId(id:number): Observable<any> {
  return this.HttpClient.get<any>(`${this.baseUrl}/Grade/GetByStageId/GetByStageId/${id}`);
}
getAllGrades(data:any): Observable<any> {
  return this.HttpClient.get<any>(`${this.baseUrl}/Grade/GetAll`,data);
}

getGradeById(id: number): Observable<any> {
  return this.HttpClient.get<any>(`${this.baseUrl}/Grade/GetByID?id=${id}`);
}
editGrade(id: number, data: any): Observable<any> {
  return this.HttpClient.put<any>(`${this.baseUrl}/Grade/Edit/${id}`, data);
}
createGrade(data: any): Observable<any> {
  return this.HttpClient.post<any>(`${this.baseUrl}/Grade/Create`, data);
}
deleteGradeById(id: number): Observable<any> {
  return this.HttpClient.delete<any>(`${this.baseUrl}/Grade/Delete/${id}`);
}


///////////////////////           Class

getlastIdClass(): Observable<any> {
  return this.HttpClient.get<any>(
    `${this.baseUrl}/Class/GetLastId/`);
}
getAllClassesbyGradeId(id:number): Observable<any> {
  return this.HttpClient.get<any>(`${this.baseUrl}/Class/GetByGradeId/GetByGradeId/${id}`);
}

getAllClasses(data:any): Observable<any> {
  return this.HttpClient.get<any>(`${this.baseUrl}/Class/GetAll`,data);
}

getClassById(id: number): Observable<any> {
  return this.HttpClient.get<any>(`${this.baseUrl}/Class/GetByID?id=${id}`);
}
editClass(id: number, data: any): Observable<any> {
  return this.HttpClient.put<any>(`${this.baseUrl}/Class/Edit/${id}`, data);
}
createClass(data: any): Observable<any> {
  return this.HttpClient.post<any>(`${this.baseUrl}/Class/Create`, data);
}
deleteClassById(id: number): Observable<any> {
  return this.HttpClient.delete<any>(`${this.baseUrl}/Class/Delete/${id}`);
}



//////////////                      Stage

getlastIdStage(): Observable<any> {
  return this.HttpClient.get<any>(
    `${this.baseUrl}/Stage/GetLastId/`);
}


getAllStages(data:any): Observable<any> {
  return this.HttpClient.get<any>(`${this.baseUrl}/Stage/GetAll`,data);
}

getStageById(id: number): Observable<any> {
  return this.HttpClient.get<any>(`${this.baseUrl}/Stage/GetByID/?id=${id}`);
}
editStage(id: number, data: any): Observable<any> {
  return this.HttpClient.put<any>(`${this.baseUrl}/Stage/Edit/${id}`, data);
}
createStage(data: any): Observable<any> {
  return this.HttpClient.post<any>(`${this.baseUrl}/Stage/Create`, data);
}
deleteStageById(id: number): Observable<any> {
  return this.HttpClient.delete<any>(`${this.baseUrl}/Stage/Delete/${id}`);
}

////////////////////                Chart




StudentCountByClass(): Observable<any> {
  return this.HttpClient.get(
    `${this.baseUrl}/StudentCountByClass/GetChartData`,);
}



StudentCountByStage(): Observable<any> {
  return this.HttpClient.get(
    `${this.baseUrl}/StudentCountByStage/GetChartData`,);
}


//////////////////////////////       login


// login(username: string, password: string): Observable<any> {
//   const url: string = `${this.baseUrl}/User/login`;
//   const body = { username, password };
//   const headers = new HttpHeaders({
//     'Content-Type': 'application/json',
//     'accept': '*/*'

//   });

//   return this.HttpClient.post(url, body, { headers });
// }

  login(username: string, password: string): Observable<any> {
    return this.HttpClient.post<any>(`${this.baseUrl}/User/login`, { username, password }).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('token', response.token); // Set token in localStorage
        } else {
          console.error('Token is missing in login response:', response);
        }
      })
    );
  }


/////////////////////////// logout
logout(): void {
  // Clear authentication state (e.g., remove token from local storage)
  localStorage.removeItem('token');

  // Navigate to the login page
  this.router.navigateByUrl('/login');
}

}
