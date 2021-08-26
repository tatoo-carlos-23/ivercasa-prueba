import { TestBed } from '@angular/core/testing';

import { IvercasaService } from './ivercasa.service';

describe('IvercasaService', () => {
  let service: IvercasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IvercasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
