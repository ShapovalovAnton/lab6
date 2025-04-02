import { ReadService } from './../service/read.service';
import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, IonCardSubtitle} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-antiques-component',
  templateUrl: './view-antiques-component.component.html',
  styleUrls: ['./view-antiques-component.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, CommonModule, IonCardSubtitle]
})
export class ViewAntiquesComponentComponent  implements OnInit {

  constructor(public readService: ReadService) { }

  ngOnInit() {
    this.readService.load();
  }

}
