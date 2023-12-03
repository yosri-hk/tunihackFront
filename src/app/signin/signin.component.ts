import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  created = true;
  not_created = true;
  message!: string;

  constructor(private registerService:RegisterService, private router: Router){}
  login(loginForm: NgForm){
    this.registerService.login(loginForm.value).subscribe(
      (response)=>{

        this.message=response;

        if (this.message.startsWith('ey'))
        {
          localStorage.setItem('currentUser',this.message);
          this.router.navigate(['/dashboard']);
        }
        this.created=false;
        this.not_created=true;
        if (this.message ==="account is locked. Verification is needed! ")
        {
          this.router.navigate(['/verif-mail']);
        }

      },
      (error)=>{
        console.log(error);
        this.not_created=false;
        this.message=error;
        this.created=true;
      }

    );
  }
}
