import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-multiple-check',
  templateUrl: './multiple-check.component.html',
})
export class MultipleCheckComponent implements OnInit {
  form: FormGroup;
  selectedCheckBoxList: any = [];
  techStackList: any = [
    { id: 1, name: 'Angular', code: 'ANG' },
    { id: 2, name: 'Node JS', code: 'NOD' },
    { id: 3, name: 'React', code: 'REA' },
    { id: 4, name: 'Vue', code: 'VUE' },
    { id: 5, name: 'jQuery', code: 'JQU' },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      technology: this.formBuilder.array([], [Validators.required]),
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // controlOnChange(e: Event) {
  controlOnChange(e: { target: { checked: any; value: any } }) {
    const technologies: FormArray = this.form.get('technology') as FormArray;

    if (e.target.checked) {
      technologies.push(new FormControl(e.target.value));
      this.selectedCheckBoxList.push(e.target.value);
    } else {
      const index = technologies.controls.findIndex(
        (technology) => technology.value === e.target.value
      );
      technologies.removeAt(index);
      const index2 = this.selectedCheckBoxList.findIndex(
        (val: any) => val === e.target.value
      );
      this.selectedCheckBoxList.removeAt(index2);
    }
  }

  submit() {
    console.log(this.selectedCheckBoxList);
    console.log(this.form.value);
  }
}
