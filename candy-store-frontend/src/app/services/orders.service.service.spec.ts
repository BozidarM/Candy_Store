import { TestBed } from '@angular/core/testing';

import { Orders.ServiceService } from './orders.service.service';

describe('Orders.ServiceService', () => {
  let service: Orders.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Orders.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
