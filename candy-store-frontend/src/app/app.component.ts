import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'candy-store-frontend';

  constructor (private authenticationService: AuthenticationService) {}

  loggedIn$: any;

  ngOnInit(){
    
    this.loggedIn$ = this.authenticationService.isLoggedIn();
  }

}
