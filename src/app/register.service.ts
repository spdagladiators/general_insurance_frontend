import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { 
   
  }
  registerUser(name: string, email: string, dob: any, mno:number, add: string, pass: string):Observable<any>{
    return this.http.post('http://localhost:8080/general_insurance/register/saveuser', name+'/'+email+'/'+dob+'/'+mno+'/'+add+'/'+pass ,{responseType:'text'});
    
  }
}
