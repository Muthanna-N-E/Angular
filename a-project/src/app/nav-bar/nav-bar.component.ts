import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
//   `
//   <div>
//   <form action="">
//   <h1>Employee Intrest Survey Form</h1>
//   <label>Enter your Name:</label>
//   <input type="text">
//   <br>
//   <br>
//   <label>Enter your Department:</label>
//   <input type="text">
//   <br>
//   <br>
//   <label>Tell us a little about yourself:</label>
//   <textarea name="" id="" cols="30" rows="5"></textarea>
//   <br>
//   <br>
//   <label>Do you exercise at home ?</label>
//   <input type="radio" id="yes">
//   <label for="yes">Yes</label>
//   <input type="radio" id="no">
//   <label for="no">No</label>
//   <p>How do you like to read about your favorite topics ?</p>
//   <input type="checkbox" id="a">
//   <label for="a">Books</label>
//   <input type="checkbox" id="b">
//   <label for="b">Online Resources</label>
//   <input type="checkbox" id="c">
//   <label for="c">Phone Apps</label>
//   <input type="checkbox" id="d">
//   <label for="d">Magazines</label>
//   <br>
//   <br>
//   <label for="">What genre of movies do you like ?</label>
//   <select name="" id="">
//   <option value="">Comedy</option>
//   <option value="">Action</option>
//   <option value="">Horror</option>
// </select>
// <br>
// <br>
// <button>Submit Form</button>
// </form>
// </div> 
        
// `

  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  myReactiveForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm=new FormGroup({
      'fname':new FormControl(null),
      'lname':new FormControl(null),
      'email':new FormControl(null,[Validators.email,Validators.required])
    });
    
  }
  onSubmit(){
    console.log(this.myReactiveForm.value);
  }
// tnq="Thank You"
}
