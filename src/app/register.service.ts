import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  user2 = new User();
  email !: any;
  PATH_OF_API="http://localhost:9000";


  constructor(private httpClient: HttpClient) { 
    this.user2.id=0;
    
  }

  public register(registerData: any){
    return this.httpClient.post(this.PATH_OF_API+"/auth/register",registerData,{ responseType: 'text' });
  }
  public login(loginData: any){
    return this.httpClient.post(this.PATH_OF_API+"/auth/authenticate",loginData,{ responseType: 'text' });

  }

  public verifyEmail(token: any){
    return this.httpClient.get(this.PATH_OF_API + "/auth/mail-verif?token=" + token,{ responseType: 'text' });
  }
  getUser(email: string) {
    return this.httpClient.get<User>(this.PATH_OF_API + "/auth/get?email=" + email)

 }
  public getCurrentUser():User{
    const token = localStorage.getItem('currentUser');
    if (token) {
      try {
        // Decode the token
        const decoded = jwtDecode(token)
        console.log('Decoded Email:', decoded.sub);
         this.email = decoded.sub;
        
        // Use the email or perform necessary operations
        // ...
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      console.log('Token not found in local storage');
    }
    this.getUser(this.email).subscribe(
      user=> {
       console.log(user);
       this.user2.id=user.id
       this.user2.firstName=user.firstName;
       this.user2.lastName=user.lastName;
       this.user2.email=user.email;
       this.user2.points = user.points;
       this.user2.phoneNumber=user.phoneNumber;
       console.warn('authhjdsf')
       this.user2=user;
       if (user.role==="MOD")
       {
         this.user2.role="MOD"
       }
       if (user.role==="USER")
       {
         this.user2.role="USER"
       }
       if (user.role==="ADMIN")
       {
         this.user2.role="ADMIN"
       }
       console.error(user.role)
       console.error(user.role)
       if (user.role==="DELIVERY")
       {
         this.user2.role="DELIVERY"
       }





  //     return this.user2;


     },);
    
    return this.user2;

  }
  public getallusers()
}