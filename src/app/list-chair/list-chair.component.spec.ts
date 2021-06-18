import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChairComponent } from './list-chair.component';

describe('ListChairComponent', () => {
  let component: ListChairComponent;
  let fixture: ComponentFixture<ListChairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
