import { Component, OnInit } from '@angular/core';

import { TestJayaItem } from './test-jaya-item';
import { TestJayaService } from './test-jaya.service';


@Component({
    selector: 'test-jaya',
    templateUrl: 'test-jaya.component.html',
    
        providers: [TestJayaService]
    
})
export class TestJayaComponent {


    items: TestJayaItem[];

    constructor(service: TestJayaService) {
        this.items = service.items;
    }


}
