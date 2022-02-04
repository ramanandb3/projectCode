import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import term from '../../assets/term.json';

@Component({
  selector: 'app-welcometorus',
  templateUrl: './welcometorus.page.html',
  styleUrls: ['./welcometorus.page.scss'],
})
export class WelcometorusPage implements OnInit {
  // curr:any;
  // var: any;
  // asd: string;




  constructor(private router: Router) { }

  public moviesList: {
    id: number;
    name: string;
    description: string;
  }[] = term;

  logout() {
    this.router.navigate(["./home"])
  }




  ngOnInit() {


    // fetch('../../assets/term.json').then(async (res) => {
    //   this.curr=await res.json();
    //   console.log(res);
    //   this.var=this.curr['ETH']['USD']
    //   localStorage.setItem("item",this.var);

    // })
    // this.asd=localStorage.getItem("item")
  }

}
