import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  title = 'form-pratice';

  homeform!: FormGroup;
  display:boolean = false;

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
      note: new FormControl(null),
      address: this.fb.group({
        street: ['', Validators.required],
        country: ['', Validators.required],
        region: ['', Validators.required],
      })
    })

    this.homeform.markAllAsTouched();
    // ,{updateOn:'submit'}

  } 

  onSubmit() {

    this.display = true;

    if(this.homeform.invalid) {
      this.homeform.markAllAsTouched();
    }
  
    console.log(this.homeform.value);
    console.log(this.homeform.controls['address'].value);

  }
}
