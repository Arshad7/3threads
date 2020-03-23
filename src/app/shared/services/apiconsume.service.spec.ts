import { TestBed } from '@angular/core/testing';

import { ApiconsumeService } from './apiconsume.service';

describe('ApiconsumeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiconsumeService = TestBed.get(ApiconsumeService);
    expect(service).toBeTruthy();
  });
});
