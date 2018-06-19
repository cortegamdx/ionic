import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MovieProvider
  ]
})
export class FeedPage {
  private filmes = [];

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private movie: MovieProvider 
    ) {
  }
  

  //Executa quando  a pagina abre

  ionViewDidLoad(){
   
   
    this.movie.getMovies().subscribe(data =>{
      this.filmes = (data as  any).results;
      console.log(this.filmes);
    },error => {
      console.log(error);
    });
  }

}
