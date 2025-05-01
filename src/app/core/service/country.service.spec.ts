import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CountryService } from './country.service';

describe('CountryService', () => {
  let service: CountryService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountryService],
    });
    service = TestBed.inject(CountryService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all countries', () => {
    const mockCountries = [{ name: { common: 'Colombia' } }];

    service.getAll().subscribe((data) => {
      expect(data).toEqual(mockCountries);
    });

    const req = http.expectOne('https://restcountries.com/v3.1/all');
    expect(req.request.method).toBe('GET');
    req.flush(mockCountries);
  });

  it('should fetch a country by code', () => {
    const code = 'COL';
    const mockCountry = [{ name: { common: 'Colombia' }, cca3: 'COL' }];

    service.getByCode(code).subscribe((data) => {
      expect(data).toEqual(mockCountry);
    });

    const req = http.expectOne(`https://restcountries.com/v3.1/alpha/${code}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCountry);
  });
});
