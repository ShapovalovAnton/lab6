import { antiquesType, AntiquesType } from './../class/antiguesType';
import { ConfigService } from './../Lab8/config.service';
import { ReadService } from './../service/read.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, IonCardSubtitle, IonCheckbox} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { AddAntiquesComponent } from '../add-antiques/add-antiques.component';
import { EditAntiquesComponent } from '../edit-antiques/edit-antiques.component';
import { Subscription } from 'rxjs';
import { AntiquesCountry, antiquesCountry } from '../Lab8/AntiquesCountry';

@Component({
  selector: 'app-view-antiques-component',
  templateUrl: './view-antiques-component.component.html',
  styleUrls: ['./view-antiques-component.component.scss'],
  imports: [IonCard, IonCardHeader, IonCheckbox, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, CommonModule, IonCardSubtitle, AddAntiquesComponent, EditAntiquesComponent]
})
export class ViewAntiquesComponentComponent  implements OnInit, OnDestroy {
  antiquesType=antiquesType;
  antiquesCountry =antiquesCountry;
  selectedTypes: AntiquesType[] = [];
  selectedCountries: AntiquesCountry[] = [];

  private subscriptions: Subscription[]=[];
  constructor(public readService: ReadService, private configService: ConfigService) { }


  ngOnInit() {
    this.readService.load();
  
    this.selectedTypes = this.configService.types$.value.length
    ? [...this.configService.types$.value]
    : [...this.antiquesType];

  this.selectedCountries = this.configService.countries$.value.length
    ? [...this.configService.countries$.value]
    : [...this.antiquesCountry];

  // Підписка лише для оновлення, якщо це зроблено ззовні
  const typeSub = this.configService.types$.subscribe((types) => {
    if (!this.isFilter) {
      this.selectedTypes = [...types];
    }
  });

  const countrySub = this.configService.countries$.subscribe((countries) => {
    if (!this.isFilter) {
      this.selectedCountries = [...countries];
    }
  });
  
    this.subscriptions.push(typeSub, countrySub);
  }

  isFilter = false;

  toggleType(type: AntiquesType, checked: boolean) {
    if (checked) {
      this.selectedTypes.push(type);
    } else {
      this.selectedTypes = this.selectedTypes.filter(t => t !== type);
    }
  }

  toggleCountry(country:AntiquesCountry, checked: boolean) {
    if (checked) {
      this.selectedCountries.push(country);
    } else {
      this.selectedCountries = this.selectedCountries.filter(t => t !== country);
    }
  }

  filter(){

    this.configService.setType(this.selectedTypes);
    this.configService.setCountry(this.selectedCountries);
  }

  

  change_viewFilters(){
    this.isFilter=!this.isFilter;
    this.selectedTypes = [];
    this.selectedCountries = [...this.antiquesCountry];
  }

  ngOnDestroy(){
    this.subscriptions.forEach((s)=>s.unsubscribe());

  }

  get visibleAntiques() {
    return this.isFilter ? this.readService.searchAntiques : this.readService.antiques;
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

  filters(){

    this.configService.setType(this.selectedTypes);
    this.configService.setCountry(this.selectedCountries);
    this.filter();
  }
  

}
