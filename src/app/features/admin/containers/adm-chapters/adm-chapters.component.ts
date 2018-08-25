import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-adm-chapters',
  templateUrl: './adm-chapters.component.html',
  styleUrls: ['./adm-chapters.component.scss']
})
export class AdmChaptersComponent implements OnInit {
  availableCourses;
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.prepareForm();

    this.availableCourses = [
      { id: 1, label: "Angular" },
      { id: 2, label: "JavaScript" },
    ];
  }

  prepareForm() {
    this.form = this.fb.group({
      course: [null, [Validators.required]],
      chapter_name: ['one', [Validators.required]],
      accessbility: [],
      content: [],
    });

    // this.form = new FormGroup({
    //   course: new FormControl(null,[Validators.required]),
    //   chapter_name: new FormControl('one',[Validators.required]),
    //   accessbility: new FormControl(),

    // })
   
  }
 get mdContent() {
      return this.form.get('content').value;
    }
}
