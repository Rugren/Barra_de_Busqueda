import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    this.search.valueChanges.subscribe(value => {
      this.searchEmitter.emit(value)
    })
  }

  // search = new FormControl('') // Así no va.
  search = new FormControl()

  @Output('search') searchEmitter = new EventEmitter<string>()





}
