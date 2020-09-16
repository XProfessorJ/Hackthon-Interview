import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistComponent } from './regist.component';

describe('RegistComponent', () => {
  let component: RegistComponent;
  let fixture: ComponentFixture<RegistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
