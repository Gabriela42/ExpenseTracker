import { TestBed } from '@angular/core/testing';

import { RegistrosService } from './registros.service';

describe('RegistrosService', () => {
  let service: RegistrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
