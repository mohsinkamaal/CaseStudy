/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { EditWorkoutComponent } from './edit-workout.component';

let component: EditWorkoutComponent;
let fixture: ComponentFixture<EditWorkoutComponent>;

describe('edit-workout component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EditWorkoutComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(EditWorkoutComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});