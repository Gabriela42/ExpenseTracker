import { TestBed } from '@angular/core/testing';

import { PresupuestoService } from './presupuesto.service';

describe('BudgetService', () => {
  let service: PresupuestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresupuestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
