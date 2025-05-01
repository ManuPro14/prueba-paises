import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { CountryService } from '../../core/service/country.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent, FormsModule, HttpClientTestingModule],
      providers: [CountryService],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter countries by search term', () => {
    component.countries = [
      { name: { common: 'Colombia' } },
      { name: { common: 'Argentina' } },
    ];
    component.searchTerm = 'col';
    component.onSearch();
    expect(component.filteredCountries.length).toBe(1);
    expect(component.filteredCountries[0].name.common).toBe('Colombia');
  });

  it('should set selected country on openDetails', () => {
    const country = { name: { common: 'Chile' } };
    component.openDetails(country);
    expect(component.selectedCountry).toEqual(country);
  });

  it('should clear selected country on closeModal', (done) => {
    component.selectedCountry = { name: { common: 'COL' } };
    component.isModalVisible = true;
    component.closeModal();
    expect(component.selectedCountry).toBeNull();

    setTimeout(() => {
      expect(component.isModalVisible).toBeFalse();
      done();
    }, 310);
  });
});