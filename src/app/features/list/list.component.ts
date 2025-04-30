import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../core/service/country.service';
import { Router } from '@angular/router';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  imports: [NgIf, NgFor, FormsModule, NgClass],
})
export class ListComponent implements OnInit {
  countries: any[] = [];
  filteredCountries: any[] = [];
  paginatedCountries: any[] = [];
  loading = true;
  searchTerm = '';
  currentLetter: string = '';
  currentPage = 1;
  itemsPerPage = 9;
  totalPages = 1;

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  constructor(private service: CountryService, private router: Router) {}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => {
        this.countries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        alert('Error al cargar países');
      },
    });
  }

  onSearch() {
    this.currentPage = 1;
    this.applyFilters();
  }

  onLetterSelect(letter: string) {
    this.currentLetter = this.currentLetter === letter ? '' : letter;
    this.currentPage = 1;
    this.applyFilters();
  }

  applyFilters() {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredCountries = this.countries.filter((country) => {
      const name = country.name.common.toLowerCase();
      const matchesSearch = name.includes(term);
      const matchesLetter = this.currentLetter
        ? name.startsWith(this.currentLetter.toLowerCase())
        : true;
      return matchesSearch && matchesLetter;
    });

    this.totalPages = Math.ceil(this.filteredCountries.length / this.itemsPerPage);
    this.updatePagination();
  }

  updatePagination() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedCountries = this.filteredCountries.slice(start, end);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagination();
  }

  goToDetail(code: string) {
    this.router.navigate(['/detail', code]);
  }
}