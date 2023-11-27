import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  email:string = "sSSSilviuu_popa98@yahoo.com";

  public usersArray:any[] =
	[
	{uname: "Smith", gender: "M"},
	{uname: "Scott", gender: "m"},
	{uname: "Nancy", gender: "F"},
	{uname: "Ruth", gender: "f"},
];


}
