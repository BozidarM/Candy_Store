import { TestBed } from '@angular/core/testing';

import { Users.ServiceService } from './users.service.service';

describe('Users.ServiceService', () => {
  let service: Users.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Users.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
