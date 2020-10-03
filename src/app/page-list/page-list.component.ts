import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SearchResult } from '../search-result.model';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'wordcount', 'snippet'];
  @Input() dataSource;

  constructor() {}

  ngOnInit(): void {}
}
