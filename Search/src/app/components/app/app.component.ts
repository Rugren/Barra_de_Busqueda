import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
/*handleSearch($event: string) {
throw new Error('Method not implemented.');
}*/
  // title = 'Search';

  handleSearch(value: string) {
    console.log(value);
  }

}
