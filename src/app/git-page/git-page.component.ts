import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-git-page',
  templateUrl: './git-page.component.html',
  styleUrls: ['./git-page.component.css']
})
export class GitPageComponent implements OnInit {
  @Output() emitSearch = new EventEmitter<any>();
  show:boolean = true;

  query: any;
  term: any;

  constructor() { }

  ngOnInit() {
  }

}
