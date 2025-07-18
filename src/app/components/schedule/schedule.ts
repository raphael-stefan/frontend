import { Component, inject } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service';
import { Schedule } from '../../services/schedule.service';
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
    phone: '',     // <- Adicionado aqui
    date: '',
    service: '',
    address: '',
    dogSize: '',
    notes: ''
  };

  formatDate(event: any) {
  let input = event.target.value.replace(/\D/g, ''); // Remove tudo que não é número

  if (input.length >= 3 && input.length <= 4) {
    input = input.replace(/^(\d{2})(\d{1,2})/, '$1/$2');
  } else if (input.length > 4) {
    input = input.replace(/^(\d{2})(\d{2})(\d{1,4}).*/, '$1/$2/$3');
  }

  this.form.date = input;
}


  validateDate() {
  const inputDate = new Date(this.form.date);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Zera hora para comparação apenas por dia

  

  if (isNaN(inputDate.getTime())) {
    alert("❌ Invalid date format. Please use MM/DD/YYYY.");
    this.form.date = '';
    return;
  }

  if (inputDate < today) {
    alert("❌ You cannot schedule a date in the past.");
    this.form.date = '';
  }
}


  submitForm() {
    this.scheduleService.create(this.form).subscribe({
      next: () => {
        alert('✅ Appointment successfully submitted!');
        this.form = {
          name: '',
          email: '',
          phone: '',       // <- Adicionado aqui também
          address: '',
          dogSize: '',
          notes: '',
          date: '',
          service: ''
        };
      },
      error: (err) => {
        console.error('❌ There was an error submitting your appointment. Please try again.', err);
        alert('There was an error submitting your appointment. Please try again.');
      }
    });
  }
}
