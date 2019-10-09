import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public ad: string = 'Erinç';
  public soyad: string;

  constructor(private router: Router, private toastController: ToastController,  private alertController: AlertController) {}


  git() {
    this.router.navigate(['/detay', {deger: this.ad}]);

    //this.router.navigateByUrl('/detay');
  }

  tamam() {

    console.log('Merhaba ' + this.ad + ' ' + this.soyad );
  }

  async uyariGoster() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: degisken => {
            //console.log('yazdığınız değer : ' + degisken.name1);
            this.mesajGoster(degisken.name1);
          }
        }
      ]
    });

    await alert.present();

  }

  async mesajGoster(deger) {
    const toast = await this.toastController.create({
      message: deger,
      position: 'top',
      buttons: [
         {
          side: 'start',
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }


}
