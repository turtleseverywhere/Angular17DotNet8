import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private User: BehaviorSubject<any> = new BehaviorSubject({});
  private Config: BehaviorSubject<any> = new BehaviorSubject({});
  private Language: BehaviorSubject<any> = new BehaviorSubject({});
  private Claims: [] = [];

  getClaims() {
    let claims = localStorage.getItem('Claims');
    if (claims != null)
      return JSON.parse(claims);
    return [];
  }
  setClaims(claims: []) {
    this.Claims = claims;
    if (claims)
      localStorage.setItem('Claims', JSON.stringify(claims));
    else
      localStorage.removeItem('Claims');
  }
  getUser() {
    let user = localStorage.getItem('User');
    if (user != null) {
      this.User.next(JSON.parse(user));
    }
    else {
      this.User.next(null);
    }
    return this.User;
    //return JSON.parse(localStorage.getItem('User'));
  }
  setUser(user: any) {
    //this.StoredUser = user;
    this.User.next(user);
    if (user)
      localStorage.setItem('User', JSON.stringify(user));
    else
      localStorage.removeItem('User');
  }
  getConfig() {
    let config = localStorage.getItem('Config');
    if (config != null) {
      this.Config.next(JSON.parse(config));
    }
    else {
      this.Config.next(null);
    }
    return this.Config;
  }
  setConfig(config: any) {
    this.Config.next(config);
    if (config)
      localStorage.setItem('Config', JSON.stringify(config));
    else
      localStorage.removeItem('Config');
  }
  getLanguage() {
    let language = localStorage.getItem('Language');
    if (language != null) {
      this.Language.next(language);
    }
    else {
      this.Language.next('en');
    }
    return this.Language;
  }
  setLanguage(language: any) {
    this.Language.next(language);
    if (language)
      localStorage.setItem('Language', language);
    else
      localStorage.removeItem('Language');
  }
}
