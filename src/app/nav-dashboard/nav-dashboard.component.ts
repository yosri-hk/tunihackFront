import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-nav-dashboard',
  templateUrl: './nav-dashboard.component.html',
  styleUrl: './nav-dashboard.component.scss'
})
export class NavDashboardComponent {
  user !: User;
  constructor(private userService: RegisterService, private router: Router){}
  ngOnInit(): void {
    if(localStorage.getItem('currentUser')===null)
    {
      this.router.navigate(['/login'])
    }
    this.user=this.userService.getCurrentUser()
    // @ts-ignore
    this.authToken = localStorage.getItem("currentUser")
    console.log(this.user)
  }
  
}
