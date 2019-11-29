import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductDetailComponent } from './page-product-detail.component';

describe('PageProductDetailComponent', () => {
  let component: PageProductDetailComponent;
  let fixture: ComponentFixture<PageProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
