
import { Component } from '@angular/core';
import {AlertController } from '@ionic/angular';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  isModalOpen = false;


  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Pacote adquirido com sucesso!',
      subHeader: '',
      message: 'Volte sempre!!',
      buttons: ['Fechar'],
    });

    await alert.present();

  }


 
 

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

 


  



 
 



}
