import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasaleComponent } from './datasale.component';

describe('DatasaleComponent', () => {
  let component: DatasaleComponent;
  let fixture: ComponentFixture<DatasaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatasaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
