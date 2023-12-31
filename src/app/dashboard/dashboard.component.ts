import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  user !: User;
  demandes: DemandeSang[] = [];

  
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
    this.loadDemandes();
  }
  loadDemandes() {
    this.userService.getDemandes().subscribe(
      (data: DemandeSang[]) => {
        this.demandes = data;
      },
      error => {
        console.error('Error fetching demandes: ', error);
      }
    );
  }
  
}
