import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-example',
  standalone: false,
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent implements OnInit {

  numberArray = from([1,2,3,4,5,6,7,8,9,10]);

  multiplyBy3(){
    this.numberArray
    .pipe(map(data => {return( data * 3)}))
    .subscribe(data => (console.log(data)))
  }

  foodArray = from(["Pizza", "Burger", "Pasta"])

  toUpperCase(){
    this.foodArray
      .pipe(map(data=> {return data.toUpperCase()}))
      .subscribe(data => (console.log(data)))
  }

  nameArrayy = from([
    {fname: "Lawson", lname: "Kwek1"},
    {fname: "Lawson2", lname: "Kwek2"},
    {fname: "Lawson3", lname: "Kwek3"},
    {fname: "Lawson4", lname: "Kwek4"},
  ])

  concatFullName(){
    this.nameArrayy
      .pipe(map(data => {return data.fname + " " + data.lname}))
      .subscribe(data => (console.log(data)))
  }

  ngOnInit(): void {
    this.multiplyBy3()
    this.toUpperCase()
    this.concatFullName()
  }
}
