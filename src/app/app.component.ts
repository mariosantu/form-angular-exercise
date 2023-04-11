import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-pratice';

  homeform!: FormGroup;

  get name() {
    return this.homeform.get('name');
  }

  get surname() {
    return this.homeform.get('surname');
  }

  get email() {
    return this.homeform.get('email');
  }

  get cod() {
    return this.homeform.get('cod');
  }



  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.homeform = new FormGroup({
    //   name: new FormControl(null, [Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]),
    //   surname: new FormControl(null, [Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]),
    //   email: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(16)]),
    //   cod: new FormControl(null, Validators.minLength(16)),
    //   note: new FormControl(null)
    // });

    this.homeform = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]],
      surname: new FormControl(null, [Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      cod: new FormControl(null, [Validators.required, Validators.minLength(16)]),
      note: new FormControl(null)
    })

    this.homeform.markAllAsTouched();
    // ,{updateOn:'submit'}

  } 

  onSubmit() {
    console.log(this.homeform);

    if(this.homeform.invalid) {
      this.homeform.markAllAsTouched();
    }

    // if(!this.homeform.get('name')!.valid && this.homeform.get('name')!.touched) {

    // }
  }
}
