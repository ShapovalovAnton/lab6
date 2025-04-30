import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { AntiquesType, antiquesType } from '../class/antiguesType';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonCard, IonInput, IonCardTitle, IonCardHeader, IonItem, IonCardContent, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonLabel, IonCheckbox, IonButton} from '@ionic/angular/standalone';
import { IAntiques } from '../class/iAntiques';
import { formConstructor } from '../forms/formsConstructor';
import { AntiquesFactory } from '../class/antiquesFactory';
import { priceValidator, upperCaseValidator } from '../service/validators';
@Component({
  selector: 'app-edit-antiques',
  templateUrl: './edit-antiques.component.html',
  styleUrls: ['./edit-antiques.component.scss'],
  imports: [IonCard, IonInput, IonCardTitle, IonCardHeader, IonItem, IonCardContent, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonLabel, IonCheckbox, IonButton, FormsModule, ReactiveFormsModule, CommonModule],
})
export class EditAntiquesComponent  implements OnInit {

  @Input() antiques!: IAntiques;
  antiquesForm!: FormGroup;
  types=antiquesType;
  

  @Output() antiquesEdit: EventEmitter<IAntiques> = new EventEmitter<IAntiques>();
  constructor(private fb: FormBuilder){}

  onSubmit():void{
    console.log('Спроба надіслати форму', this.antiquesForm.value);

  if (this.antiquesForm.valid) {
    const formData = this.antiquesForm.value;
    formData.type = this.antiques.getType();
    formData.id=this.antiques.getID;
    const antiques = AntiquesFactory.createAntiques(formData);
    console.log('Успішно створено: ', antiques);
    this.antiquesEdit.emit(antiques);
  } else {
    console.error('Form is invalid:', this.antiquesForm);
  }
  }

  ngOnInit() {
    this.antiquesForm = this.fb.group({
      name:[
        this.antiques.getName(), [Validators.required,upperCaseValidator()]
      ],
      price:[
        this.antiques.getPrice(), [Validators.required,Validators.min(10)]
      ],
      country:[
        this.antiques.getCountry(), [Validators.required,upperCaseValidator()]
      ],
      year:[
        this.antiques.getYear(), [Validators.required,Validators.min(1000)]
      ]

        

    });
    formConstructor(this.antiques.getType(), this.antiquesForm, this.fb);
  }
}
