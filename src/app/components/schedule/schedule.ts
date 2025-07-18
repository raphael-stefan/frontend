import { Component, inject } from '@angular/core';
import { ScheduleService } from '../../services-backend/schedule.service';
import { Schedule } from '../../services-backend/schedule.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './schedule.html',
  styleUrls: ['./schedule.css']
})
export class ScheduleComponent {
  scheduleService = inject(ScheduleService);

  form: Schedule = {
    name: '',
    email: '',
    date: '',
    service: '',
    address: '',
    dogSize: '',
    message: '' // ✅ CORRETO para bater com o backend
  };

  submitForm() {
    this.scheduleService.create(this.form).subscribe({
      next: () => {
        alert('✅ Agendamento enviado com sucesso!');
        this.form = {
          name: '',
          email: '',
          address: '',
          dogSize: '',
          date: '',
          service: '',
          message: '' // ✅ limpar corretamente
        };
      },
      error: (err) => {
        console.error('❌ Erro ao enviar agendamento:', err);
        alert('Erro ao enviar agendamento.');
      }
    });
  }
}
