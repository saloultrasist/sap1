import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCpropertiesComponent } from './dcproperties.component';

describe('DCpropertiesComponent', () => {
  let component: DCpropertiesComponent;
  let fixture: ComponentFixture<DCpropertiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DCpropertiesComponent]
    });
    fixture = TestBed.createComponent(DCpropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
