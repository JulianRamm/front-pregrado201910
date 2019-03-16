import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Editorial} from './Editorial';
import {EditorialService} from './Editorial.service';
import {AppModule} from '../app.module';


describe('Service: EditorialService', () => {
    let injector: TestBed;
    let service: EditorialService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, EditorialService]
        });
        injector = getTestBed();
        service = injector.get(EditorialService);
    });
    
    it('#getEditorials should return value from observable',
    (done: DoneFn) => {
    service.getEditorials().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });
    
});