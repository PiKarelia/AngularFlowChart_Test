import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayChartComponent } from './gray-chart.component';

describe('GrayChartComponent', () => {
  let component: GrayChartComponent;
  let fixture: ComponentFixture<GrayChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrayChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrayChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
