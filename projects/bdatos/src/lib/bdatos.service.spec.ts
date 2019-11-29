import { TestBed } from '@angular/core/testing';

import { BdatosService } from './bdatos.service';

describe('BdatosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BdatosService = TestBed.get(BdatosService);
    expect(service).toBeTruthy();
  });
});
