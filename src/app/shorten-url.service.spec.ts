import { TestBed } from '@angular/core/testing';

import { ShortenURLService } from './shorten-url.service';

describe('ShortenURLService', () => {
  let service: ShortenURLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortenURLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
