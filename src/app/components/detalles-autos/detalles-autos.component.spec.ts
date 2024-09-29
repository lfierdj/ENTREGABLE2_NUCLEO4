import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesAutosComponent } from './detalles-autos.component';

describe('DetallesAutosComponent', () => {
  let component: DetallesAutosComponent;
  let fixture: ComponentFixture<DetallesAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesAutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
