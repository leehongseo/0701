import { Component, OnInit } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.scss']
})
export class DirectComponent implements OnInit {
  animal:Animal
  animalList:Array<Animal>;
  constructor() {
    this.animalList=[];
    this.animal =new Animal('소',10);
    this.animalList.push(this.animal);
    this.animal =new Animal('돼지',5);
    this.animalList.push(this.animal);
    this.animal =new Animal('고양이',7);
    this.animalList.push(this.animal);
    this.animal =new Animal('말',1);
    this.animalList.push(this.animal);
    this.animal =new Animal('개',3);
    this.animalList.push(this.animal);
    this.animal =new Animal('새',18);
    this.animalList.push(this.animal);
  }

  ngOnInit() {
  }

}
