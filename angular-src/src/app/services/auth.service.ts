import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
	authToken: any;
	user: any;

  constructor(private http:Http) { }

  registerUser(user){
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');

    //users/register is temporary domain
  	return this.http.post('users/register', user,{headers: headers})
  	.map(res => res.json());
  }

  authenticateUser(user){
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');
  	return this.http.post('users/authenticate', user,{headers: headers})
  	.map(res => res.json());
  }

  //get the profile--will get unauthorized if the token is not sent
  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('users/profile',{headers: headers})
    .map(res => res.json());

  }

  storeUserData(token, user){
  	localStorage.setItem('id_token',token); //JWT look directly for this in local storage
  	localStorage.setItem('user',JSON.stringify(user));
  	this.authToken = token;
  	this.user = user;
  }


  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }


  login(){
    return tokenNotExpired();
  }


  logout(){
  	this.authToken = null;
  	this.user = null;
  	localStorage.clear();
  }

}
