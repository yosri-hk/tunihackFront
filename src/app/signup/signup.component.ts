import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  created = true;
  not_created = true;
  message!: String;

  loading = true;
  constructor(private registerService: RegisterService){}
 
  register(registerForm: NgForm){
    this.loading= false;
    this.registerService.register(registerForm.value).subscribe(
      (response)=>{
        this.created=false;
        this.loading= true;
        this.message="account created successfully!"
        
        
      },
      (error)=>{
        console.log(error);
        this.not_created=false;
        this.message="account created successfully!";
        this.created=true;
        this.loading= true;

            }

    );
}

}
