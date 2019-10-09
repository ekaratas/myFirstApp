import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.page.html',
  styleUrls: ['./detay.page.scss'],
})
export class DetayPage implements OnInit {

  degisken: string;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {

    this.degisken = this.router.snapshot.paramMap.get('deger');

    console.log('Diğer sayfadan gelen değer: ' + this.router.snapshot.paramMap.get('deger'));

  }

}
