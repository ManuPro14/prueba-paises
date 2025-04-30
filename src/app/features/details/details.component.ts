import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../core/service/country.service';
import { NgIf, DecimalPipe } from '@angular/common'; 

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgIf, DecimalPipe],
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  country: any = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private service: CountryService
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    if (code) {
      this.service.getByCode(code).subscribe({
        next: (data) => {
          this.country = data[0];
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          alert('No se pudo cargar el país');
        },
      });
    }
  }
}