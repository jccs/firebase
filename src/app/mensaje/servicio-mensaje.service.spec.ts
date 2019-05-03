import { TestBed } from '@angular/core/testing';

import { ServicioMensajeService } from './servicio-mensaje.service';

describe('ServicioMensajeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioMensajeService = TestBed.get(ServicioMensajeService);
    expect(service).toBeTruthy();
  });
});
