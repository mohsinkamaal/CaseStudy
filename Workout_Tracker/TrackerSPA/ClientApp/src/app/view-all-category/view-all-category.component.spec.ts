/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ViewAllCategoryComponent } from './view-all-category.component';

let component: ViewAllCategoryComponent;
let fixture: ComponentFixture<ViewAllCategoryComponent>;

describe('view-all-category component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ViewAllCategoryComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ViewAllCategoryComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});