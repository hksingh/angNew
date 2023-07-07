import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit{
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    const id1 = this.route.snapshot.paramMap.get('id');
    console.log('Id passed : ', id1);
    this.route.paramMap.subscribe( params => {
      const id = params.get('id');
      console.log('Got through the observable : ', id);
    })
  }
}
