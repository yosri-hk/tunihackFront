import { Component } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-mail-verif',
  templateUrl: './mail-verif.component.html',
  styleUrl: './mail-verif.component.scss'
})
export class MailVerifComponent {
  message!: string;
  constructor(private registerService: RegisterService) {
  }
  ngOnInit(): void {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const token = urlSearchParams.get("token")
    // @ts-ignore
    this.registerService.verifyEmail(token).subscribe(

      (response)=>{
        console.log(response)
        // @ts-ignore
        this.message=response
      },
      (error)=>{
        this.message=error;
        console.error(error)

      }
    )

  }


}
