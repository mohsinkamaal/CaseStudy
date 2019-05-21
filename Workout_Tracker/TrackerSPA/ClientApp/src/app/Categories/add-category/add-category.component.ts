import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Category } from '../../Category';
import { WorkoutService } from '../../workout.service';

@Component({
    selector: 'app-add-category',
    templateUrl: './add-category.component.html',
    styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent {
  frmCat: FormGroup;
  constructor(private fb: FormBuilder, private service: WorkoutService) { }

  ngOnInit() {
    this.frmCat = this.fb.group({
      //id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  get f() {
    return this.frmCat.controls;
  }

  saveForm(frm: NgForm) {
    if (frm.valid) {
      let cat: Category = new Category(frm.value.id,frm.value.name);
      this.service.save(cat).subscribe(
        (data) => alert('Added'),
        (error) => alert('Error processing request')
      );
    }
  }
}
