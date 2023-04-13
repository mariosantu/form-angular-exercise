import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-array-exaple',
  templateUrl: './form-array-exaple.component.html',
  styleUrls: ['./form-array-exaple.component.css']
})
export class FormArrayExapleComponent {

  display : boolean = false;

  form = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lessons: this.fb.array([])
  });

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    
  }

  get lessons() {
    return this.form.controls["lessons"] as FormArray;
  }

  addLesson() {
    const lessonForm = this.fb.group({
      title: ['', Validators.required],
      level: ['beginner', Validators.required]
    });
    
    this.lessons.push(lessonForm);
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }


  onSubmit() {
    this.display = true;
    console.log('control:');
    // console.log(this.form.controls['lessons'].value);
    // console.log(this.lessons.value);
    console.log(this.lessons);
  }
}
