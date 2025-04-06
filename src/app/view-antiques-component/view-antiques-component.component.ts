import { ReadService } from './../service/read.service';
import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, IonCardSubtitle} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { AddAntiquesComponent } from '../add-antiques/add-antiques.component';
import { EditAntiquesComponent } from '../edit-antiques/edit-antiques.component';

@Component({
  selector: 'app-view-antiques-component',
  templateUrl: './view-antiques-component.component.html',
  styleUrls: ['./view-antiques-component.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, CommonModule, IonCardSubtitle, AddAntiquesComponent, EditAntiquesComponent]
})
export class ViewAntiquesComponentComponent  implements OnInit {

  constructor(public readService: ReadService) { }

  ngOnInit() {
    this.readService.load();
  }

  showAddForm=false;
  addFormShow(){
    this.showAddForm=true;
  }

  addAntiques($event: any){
    this.readService.addAntiques($event);
    this.showAddForm=false;
  }

  showEditForm=false;
  editFormnumber=0;
  editFormShow(i:number){
    this.showEditForm=true;
    this.editFormnumber=i;
  }

  editAntiques($event: any, i:number){
    this.readService.antiques[i]=$event;
    this.showEditForm=false;
  }

  deleteAntique(i: number) {
    this.readService.removeAntique(i);
  }

}
