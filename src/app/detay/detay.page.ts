import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.page.html',
  styleUrls: ['./detay.page.scss'],
})
export class DetayPage implements OnInit {

  public getValue;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {

    this.getValue = this.router.snapshot.paramMap.get('deger');
    console.log(JSON.parse(this.getValue));


  }

}
