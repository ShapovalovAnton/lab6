import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AntiquesType, antiquesType } from '../class/antiguesType';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonCard, IonInput, IonCardTitle, IonCardHeader, IonItem, IonCardContent, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonLabel, IonCheckbox, IonButton} from '@ionic/angular/standalone';
import { IAntiques } from '../class/iAntiques';
import { formConstructor } from '../forms/formsConstructor';
import { AntiquesFactory } from '../class/antiquesFactory';
import { priceValidator, upperCaseValidator } from '../service/validators';
@Component({
  selector: 'app-add-antiques',
  templateUrl: './add-antiques.component.html',
  styleUrls: ['./add-antiques.component.scss'],
  imports: [IonCard, IonInput, IonCardTitle, IonCardHeader, IonItem, IonCardContent, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonLabel, IonCheckbox, IonButton, FormsModule, ReactiveFormsModule, CommonModule],
})
export class AddAntiquesComponent  implements OnInit {
  antiquesForm: FormGroup;
  currentType: AntiquesType ='Coin';
  types=antiquesType;

  @Output() antiquesAdd: EventEmitter<IAntiques> = new EventEmitter<IAntiques>();
  constructor(private fb: FormBuilder){
    this.antiquesForm=this.fb.group({
      name: ["", [Validators.required, upperCaseValidator()]],
      year: ["", [Validators.required, Validators.min(1000)]],
      country: ["", [Validators.required, upperCaseValidator()]],
      price: ["", [Validators.required, priceValidator()]]

    });
  }

  onTypeChange(type:any): void {
    this.currentType= type as AntiquesType;
    formConstructor(type, this.antiquesForm, this.fb)
  }

  onSubmit():void{
    console.log('Спроба надіслати форму', this.antiquesForm.value);

  if (this.antiquesForm.valid) {
    const formData = this.antiquesForm.value;
    formData.type = this.currentType;
    formData.id=10;
    const antiques = AntiquesFactory.createAntiques(formData);
    console.log('Успішно створено: ', antiques);
    this.antiquesAdd.emit(antiques);
  } else {
    console.error('Form is invalid:', this.antiquesForm);
  }
  }

  ngOnInit() {
    this.onTypeChange(this.currentType);
  }

}
