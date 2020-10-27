import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignDevelopComponent } from './design-develop.component';

describe('DesignDevelopComponent', () => {
  let component: DesignDevelopComponent;
  let fixture: ComponentFixture<DesignDevelopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignDevelopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
