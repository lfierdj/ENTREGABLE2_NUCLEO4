import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesAComponent } from './detalles-a.component';

describe('DetallesAComponent', () => {
  let component: DetallesAComponent;
  let fixture: ComponentFixture<DetallesAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
