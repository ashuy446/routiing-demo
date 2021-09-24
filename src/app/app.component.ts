import { Component } from '@angular/core';
import { UsersdataService } from './usersdata.service'
import { FormControl, FormGroupName, FormGroup, Validators, } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])

  })
 
  get email() { debugger;return this.loginForm.get('email') }
  get password() { debugger;return this.loginForm.get('password') }
  onSubmit(data: any) {
    if (this.loginForm.invalid) {
      console.warn("Invalid, Please fill all detail");
      this.loginForm.markAllAsTouched();
    } else {
      console.warn(data);
    }
  }
  title = '';
  ApiResponse: any = null;
  data = [];
  constructor(private user: UsersdataService) {
    this.title = "Error"
    console.warn(this.user.getData())

    this.user.get();
    this.user.getApiData().subscribe(response => {
      debugger;
      this.ApiResponse = response;
      this.ApiResponse = response;

    })
  }
}
