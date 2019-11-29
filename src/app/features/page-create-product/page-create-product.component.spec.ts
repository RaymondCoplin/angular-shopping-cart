import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateProductComponent } from './page-create-product.component';

describe('PageCreateProductComponent', () => {
  let component: PageCreateProductComponent;
  let fixture: ComponentFixture<PageCreateProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCreateProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
