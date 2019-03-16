import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Book} from './Book';
import {BookService} from './Book.service';
import {AppModule} from '../app.module';


describe('Service: BookService', () => {
    let injector: TestBed;
    let service: BookService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, BookService]
        });
        injector = getTestBed();
        service = injector.get(BookService);
    });
    
    it('#getBooks should return value from observable',
    (done: DoneFn) => {
    service.getBooks().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });
    
});