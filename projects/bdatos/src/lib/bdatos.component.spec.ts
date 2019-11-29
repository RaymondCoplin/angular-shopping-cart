import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdatosComponent } from './bdatos.component';

describe('BdatosComponent', () => {
  let component: BdatosComponent;
  let fixture: ComponentFixture<BdatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
