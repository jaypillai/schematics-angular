import { Component } from '@angular/core';
import { SideMenuService } from './side-menu/side-menu.service';
import { TestJayaService } from './test-jaya/test-jaya.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private sideMenuService: SideMenuService,
    private testJayaService: TestJayaService) {
    // sideMenuService.show = true;
  }
  title = 'app';
}
