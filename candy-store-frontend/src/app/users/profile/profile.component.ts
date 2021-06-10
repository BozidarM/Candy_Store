import { Component, OnInit } from '@angular/core';
import { Users, UsersService } from 'src/app/services/users.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private users_s: UsersService, private _snackBar: MatSnackBar) { }

  data: any;

  ngOnInit(): void {
    this.findByUsername(localStorage.getItem("username"))
  }

  onSubmit(form: NgForm){
    var model: Users = {
      "fullname": form.value.fullname,
      "email": form.value.email,
      "username": localStorage.getItem("username"),
      "password": form.value.password,
      "city": form.value.city,
      "address": form.value.address,
      "birthday": new Date(form.value.birthday)
    }
    this.users_s.update(model).subscribe(value => { this._snackBar.open("You successfuly updated your account.","",{duration: 3000}); });
  }

  public findByUsername(username: string){
    this.users_s.findByUsername(username).subscribe(value => { this.data = value; });
  }
}
