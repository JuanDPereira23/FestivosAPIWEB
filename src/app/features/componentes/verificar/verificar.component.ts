import { Component, OnInit } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { FestivoService } from '../../servicios/festivo.service';

@Component({
  selector: 'app-verificar',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    FormsModule
  ],
  templateUrl: './verificar.component.html',
  styleUrls: ['./verificar.component.css']
})
export class VerificarComponent implements OnInit {

  public fechaSeleccionada: Date | null = null;
  public resultado: string | null = null;

  constructor(private festivoService: FestivoService) {}

  ngOnInit(): void {}

  verificarFecha() {
    if (this.fechaSeleccionada) {
      const day = this.fechaSeleccionada.getDate();
      const month = this.fechaSeleccionada.getMonth() + 1;
      const year = this.fechaSeleccionada.getFullYear();

      console.log(`Consultando API con la fecha: ${day}-${month}-${year}`);

      this.festivoService.consultar(day, month, year).subscribe({
        next: (response: string) => {
          console.log('Respuesta de la API:', response);
          this.resultado = response;
        },
        error: (error) => {
          console.error('Error al verificar la fecha:', error);
          this.resultado = 'Error al verificar la fecha. Inténtalo de nuevo.';
        }
      });
    } else {
      this.resultado = 'Por favor, selecciona una fecha.';
    }
  }
}
