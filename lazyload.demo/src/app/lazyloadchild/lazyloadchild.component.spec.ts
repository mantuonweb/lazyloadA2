import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadchildComponent } from './lazyloadchild.component';

describe('LazyloadchildComponent', () => {
  let component: LazyloadchildComponent;
  let fixture: ComponentFixture<LazyloadchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyloadchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
