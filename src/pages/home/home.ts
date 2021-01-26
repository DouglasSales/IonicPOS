import { Component } from '@angular/core';
import { ModalController, NavController, ToastController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Data } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items = [ ];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data, private toast: ToastController) {
    this.dataService.getData().then((todos) => {
      if(todos){
        this.items = todos;
      }
    });  
    
  }

  ionViewDidLoad() {
    /* this.items = [
      {title: 'todo 1', description: 'tarefa 1'},
      {title: 'todo 2', description: 'tarefa 2'},
      {title: 'todo 3', description: 'tarefa 3'}
    ] */
  }

  addItem(){
    let addModal = this.modalCtrl.create(AddItemPage);

    addModal.onDidDismiss((item) => {
      if(item){
        this.saveItem(item);
      }
    });

    addModal.present();
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }

 
  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });

  }

  deleteItem(item){
    //this.dataService.delete(this.items);
    var index = this.items.indexOf(item);
    this.items.splice(index, 1);        
    this.dataService.save(this.items);        
    this.toast.create({ message: 'Item removido.', duration: 3000, position: 'botton' }).present(); 
  }

  //atualizaItem(item){
  //  this.items.push(item);
  //  this.dataService.update(this.items);    
 // }

 // atualizaItem(item) {
   // let editModal = this.modalCtrl.create(ItemDetailPage, { item: item });

    //editModal.onDidDismiss((editItem) => {
     // if (editItem) {
      //  var index = this.items.indexOf(item);
       // this.items[index] = editItem;
        //this.dataService.save(this.items);
        //this.toast.create({ message: 'Item editado.', duration: 3000, position: 'botton' }).present();                  
 //     }
  //  });
  //}  
 
    
}
