import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';
import {EditorialListComponent} from './editorial-list.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {EditorialService} from '../editorial.service';
import {Editorial} from '../editorial';

describe('EditorialListComponent', () => {
    let component: EditorialListComponent;
    let fixture: ComponentFixture<EditorialListComponent>;
    const editorials: Editorial[] = require('../../../assets/editorials.json');

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, EditorialService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditorialListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should have a list of editorials', () => {
        component.editorials = editorials;
        expect(component.editorials.length).toEqual(editorials.length);
    });

    it('a editorial should be a editorial (first and last)', () => {
        component.editorials = editorials;
        //revisar todos los libros
        expect(component.editorials[0].name).toEqual(editorials[0].name);
        expect(component.editorials[editorials.length - 1].name).toEqual(editorials[editorials.length - 1].name);
    });
});
