import { TestBed } from '@angular/core/testing';

import { ServicioRecervacionesService } from './servicio-recervaciones.service';

describe('ServicioRecervacionesService', () => {
  let service: ServicioRecervacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioRecervacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
