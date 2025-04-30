import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../core/service/country.service';
import { Router } from '@angular/router';
import { NgIf, NgFor } from '@angular/common'; 


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  standalone: true,
  imports: [NgIf,NgFor],
})
export class ListComponent implements OnInit {
  countries: any[] = [];
  loading = true;

  constructor(private service: CountryService, private router: Router) {}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => {
        this.countries = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        alert('Error al cargar países');
      }
    });
  }

  goToDetail(code: string) {
    this.router.navigate(['/detail', code]);
  }
}