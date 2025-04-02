import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewAntiquesComponentComponent } from './view-antiques-component.component';

describe('ViewAntiquesComponentComponent', () => {
  let component: ViewAntiquesComponentComponent;
  let fixture: ComponentFixture<ViewAntiquesComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAntiquesComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAntiquesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
