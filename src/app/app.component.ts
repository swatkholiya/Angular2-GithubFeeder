import { Component , OnDestroy , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy , OnInit{
  
ngOnDestroy(){
  console.log("ap destroy");
}

ngOnInit(){
  console.log("app init");
}

constructor(){
  console.log("constructor app...");
}

}
