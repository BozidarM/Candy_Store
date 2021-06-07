import { TestBed } from '@angular/core/testing';

import { Products.ServiceService } from './products.service.service';

describe('Products.ServiceService', () => {
  let service: Products.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Products.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
