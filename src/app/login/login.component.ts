import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginuser = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });


  //login:UserLogin = new UserLogin("sumith","sumith")

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit() {

  }

  verify: any
  em: any;
  pw: any;
  loginUser(formdata: any): void {
    this.em = formdata.email;
    this.pw = formdata.password;
    this.userService.verifyUser(this.em,this.pw).subscribe((data) => {

      console.log(data)
      console.log(data.localeCompare('Correct password'))
      if (!(data.localeCompare('Correct password'))) {
        this.router.navigate(['/'])
      }
      else {
        this.router.navigate(['/login'])
        //console.log(this.verify)

      }
   
    }
   )

  }

}
