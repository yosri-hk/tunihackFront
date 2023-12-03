import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  PATH_OF_API="http://localhost:9000";


  constructor(private httpClient: HttpClient) { }

  public register(registerData: any){
    return this.httpClient.post(this.PATH_OF_API+"/auth/register",registerData,{ responseType: 'text' });
  }
  public login(loginData: any){
    return this.httpClient.post(this.PATH_OF_API+"/auth/authenticate",loginData,{ responseType: 'text' });

  }

  public verifyEmail(token: any){
    return this.httpClient.get(this.PATH_OF_API + "/auth/mail-verif?token=" + token,{ responseType: 'text' });
  }
}
