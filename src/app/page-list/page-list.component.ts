import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../search-result.model';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  @Input() pages: SearchResult[] = [];

  displayedColumns: string[] = ['position', 'title', 'wordcount', 'snippet'];
  dataSource = this.pages;

  constructor() {}

  ngOnInit(): void {}
}
