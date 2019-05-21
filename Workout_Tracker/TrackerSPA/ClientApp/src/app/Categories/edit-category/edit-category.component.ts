import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../../workout.service';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
@Component({
    selector: 'app-edit-category',
    templateUrl: './edit-category.component.html',
    styleUrls: ['./edit-category.component.css']
})

export class EditCategoryComponent {
  frmCat: FormGroup;
  constructor(private currentRoute: ActivatedRoute, private service: WorkoutService, private fb: FormBuilder) { } {

    }
}
