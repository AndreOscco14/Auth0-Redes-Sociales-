import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // constructor(
  //   public auth: AuthService
  //   ){}

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}

}
