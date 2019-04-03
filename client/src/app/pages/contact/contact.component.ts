import { AuthService } from './../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from './../../partials/base-page/base-page.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'verka-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends BasePageComponent implements OnInit {
  constructor(route: ActivatedRoute, private authService: AuthService
    ) {
    super(route);
  }

  ngOnInit() {}

  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }
}
