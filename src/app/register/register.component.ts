import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '../register.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registeruser = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
    mno: new FormControl(''),
    add: new FormControl(''),
    pass: new FormControl('')
    


  });

  constructor(private registerService: RegisterService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(){
  }

  register: any
  fn: any;
  em: any;
  dob: any;
  mn: any;
  ad: any;
  pwd: any;
 


  registerUser(formdata: any): void {
    this.fn = formdata.name;
    this.em = formdata.email;
    this.dob = formdata.dob;
    this.mn = formdata.mno;
    this.ad = formdata.add;
    this.pwd = formdata.pass;
    

    this.registerService.registerUser(this.fn,this.em,this.dob,this.mn,this.ad,this.pwd).subscribe((data) => {

      console.log(data)
      console.log(data==1) 
      if (!(data==1)) {
        this.router.navigate(['/home'])
      }
      else {
        this.router.navigate(['/'])
        //console.log(this.verify)

      }
   
    }
   )

  }


}
