import { Component, OnInit,Directive,ElementRef,HostListener} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{GithubService} from '../github.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
  dat: any;
  user: any;
  repos: any;
  routeSub: any;

  p: any;
  r: any;

  constructor(private route: ActivatedRoute, public gitService: GithubService) { }
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params=>{
      console.log(params);
      this.p = params.q;
      console.log(this.p)
      this.r = params.w;
      console.log(this.r)
      

  ngOnInit() {
  }

}
