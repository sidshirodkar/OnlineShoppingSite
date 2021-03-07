import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Sidharth and shirodkar';
  users: any; // any=> makes us to lose the type safety feature of typescript

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
    //throw new Error('Method not implemented.');
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/Users').subscribe(
      (response) => {
        this.users = response;
      },
      (error) => console.log(error)
    );
  }
}
