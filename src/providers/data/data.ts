import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Data {

  constructor(public storage: Storage) {
    
  }

  getData() {
    return this.storage.get('todos');
  }

  save(data){
    this.storage.set('todos', data);
  }
  
  update(data){
    this.storage.get(data.item);
  }
   
  delete(data){
    this.storage.remove(data.item);
  }
}
