import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsersLogin, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: any;
  errorMessage: String;

  constructor(private users_s: UsersService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("logedin") == "true"){
      localStorage.clear();
      window.location.reload();
    }
  }

  onSubmit(form: NgForm){
    var model: UsersLogin = {
      "username": form.value.username,
      "password": form.value.password
    }

    this.users_s.login(model).subscribe(value => { this.message = value; if(this.message == null){
      this.errorMessage = "Failed! Inccorect password or user doesnt exists!";
      }else{
        localStorage.setItem("username", this.message.username.toString());
        localStorage.setItem("logedin", "true");
        localStorage.setItem("cartNumber", "0");
        this.router.navigate(['/']);
      }
    })
  }
}
