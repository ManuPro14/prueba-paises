import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../core/service/country.service';
import { Router } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  imports: [
    NgIf, 
    NgFor, 
    FormsModule,
  ],})
export class ListComponent implements OnInit {
  countries: any[] = [];
  filteredCountries: any[] = [];
  loading = true;
  searchTerm = '';

  constructor(private service: CountryService, private router: Router) {}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => {
        this.countries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        this.filteredCountries = this.countries;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        alert('Error al cargar países');
      },
    });
  }

  onSearch() {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredCountries = this.countries.filter((country) =>
      country.name.common.toLowerCase().includes(term)
    );
  }

  goToDetail(code: string) {
    this.router.navigate(['/detail', code]);
  }
}





