import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPersonModel, PEOPLELIST } from 'src/app/data/people';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  peopleList: IPersonModel[] = PEOPLELIST;
  constructor(private router: Router) { }

  takeBackToHome(): void {
    this.router.navigateByUrl('/welcome');
  }

}
