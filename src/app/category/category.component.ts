import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { TypeList } from '../class/typeList';
import { Type } from '../class/type';
import { IonContent, IonCardSubtitle, IonItem, IonLabel, IonButton, IonCard, IonCardContent, IonInput } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  imports: [IonContent, IonCardSubtitle,  IonItem, IonLabel, IonButton, IonCard, IonCardContent, CommonModule, IonInput]
})
export class CategoryComponent  implements OnInit {
  antiquesType=TypeList.antiquesTypes;
  @Output() typeAdd = new EventEmitter<string>();
  @Output() typeDelete = new EventEmitter<string>();
  @Output() typeEdit = new EventEmitter<Type>();
  constructor() { }

  ngOnInit() {}

  isAddShow=false;

  AddShow(){
    this.isAddShow=!this.isAddShow;
  }

  onAdd(name: any): void {
    const trimmed = name?.trim();
    if (trimmed && trimmed.length > 0) {
      this.typeAdd.emit(trimmed);
      this.isAddShow = false;
    } else {
      console.error('Назва не може бути порожньою!');
    }
  }
    
  onDelete(type:Type):void{  
      this.typeDelete.emit(type.id);
  }

  editId: string | null = null;

  startEdit(type: Type): void {
    this.editId = type.id;
  }

  finishEdit(): void {
    this.editId = null;
  }

  onEdit(type: Type, newName: any): void {
    const trimmed = newName?.trim();
    if (trimmed && trimmed.length > 0) {
      type.typeName = trimmed;
      this.typeEdit.emit(type);
    } else {
      console.error('Нове ім’я типу не може бути порожнім!');
    }
  }

}
