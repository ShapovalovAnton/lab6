import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { IAntiques } from '../class/iAntiques';
import { Epoch, EpochList } from '../pipe/epoch';
import { AgePipe } from '../pipe/agePipe';
import { filterByEpochPipe } from '../pipe/filterByEpoch';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonButton, IonSelect, IonSelectOption, IonList, IonCardSubtitle, IonCardTitle} from '@ionic/angular/standalone';
@Component({
  selector: 'app-filter-by-epoch',
  templateUrl: './filter-by-epoch.component.html',
  styleUrls: ['./filter-by-epoch.component.scss'],
  imports: [AgePipe, filterByEpochPipe,  IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonButton, IonList, IonSelectOption, IonSelect, FormsModule, CommonModule, IonCardSubtitle, IonCardTitle]
})
export class FilterByEpochComponent  implements OnInit {
  @Input() antiques!: IAntiques[];

  epochs: Epoch[] = EpochList;
  selectedEpoch: Epoch | null = null;

  constructor() { }

  ngOnInit() {}

}
