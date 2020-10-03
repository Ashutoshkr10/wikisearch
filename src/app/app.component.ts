import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SearchResult } from './search-result.model';

import { WikiService } from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: SearchResult[] = [];
  dataSource = new MatTableDataSource<SearchResult>(this.pages);

  constructor(private wikiService: WikiService) {}
  onTerm(term: string) {
    this.wikiService.search(term).subscribe((response: any) => {
      this.dataSource.data = response.query.search;
    });
  }
}
