import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FestivoService } from '../../servicios/festivo.service';

@Component({
  selector: 'app-festivos',
  standalone: true,
  imports: [
    ReferenciasMaterialModule
  ],
  templateUrl: './festivos.component.html',
  styleUrl: './festivos.component.css'
})
export class FestivosComponent {
  anioSeleccionado: number | null = new Date().getFullYear();
  festivos: { fecha: string, descripcion: string }[] = [];

  constructor(private festivoService: FestivoService) {}

  consultarFestivos() {
    if (this.anioSeleccionado) {
      this.festivoService.obtenerFestivos(this.anioSeleccionado).subscribe({
        next: (response) => {
          this.festivos = response;
        },
        error: (error) => {
          console.error('Error al consultar los festivos:', error);
        }
      });
    }
  }
}

