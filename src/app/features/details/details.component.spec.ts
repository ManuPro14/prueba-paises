import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  const mockCountry = {
    name: { common: 'Colombia', official: 'Republic of Colombia' },
    flags: { svg: 'https://flagcdn.com/co.svg' },
    region: 'Americas',
    subregion: 'South America',
    capital: ['Bogotá'],
    population: 50882884,
    area: 1141748,
    cca3: 'COL',
    languages: { spa: 'Spanish' },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    component.country = mockCountry;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
console.log();
  it('should render country name and capital', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Colombia');
    expect(compiled.textContent).toContain('Bogotá');
  });

  it('should emit close event when onClose is called', () => {
    spyOn(component.close, 'emit');
    component.onClose();
    expect(component.close.emit).toHaveBeenCalled();
  });

  it('should display list of languages', () => {
    expect(component.languages).toEqual(['Spanish']);
  });
});