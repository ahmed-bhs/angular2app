import { TestBed, inject } from '@angular/core/testing';

import { SessionItemServiceService } from './session-item-service.service';

describe('SessionItemServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionItemServiceService]
    });
  });

  it('should be created', inject([SessionItemServiceService], (service: SessionItemServiceService) => {
    expect(service).toBeTruthy();
  }));
});
