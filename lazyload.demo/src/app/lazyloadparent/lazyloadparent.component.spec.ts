import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadparentComponent } from './lazyloadparent.component';

describe('LazyloadparentComponent', () => {
  let component: LazyloadparentComponent;
  let fixture: ComponentFixture<LazyloadparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyloadparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
