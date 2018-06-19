import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  
  private baseUrl : string  = "https://api.themoviedb.org/3";
  private key : string = "24054994f1521bec357fb88cd9082d31";

  constructor(public http: HttpClient) {
    
  }

  getMovies(){
    return this.http.get(this.baseUrl+"/movie/popular?api_key="+this.key);
  }

}
