import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './schedule.html',
  styleUrls: ['./schedule.css']
})
export class Schedule {
  form = {
    name: '',
    email: '',
    date: '',
    service: '',
    address: '',
    dogSize: '',
    notes: ''
  };

  submitForm() {
    const url = 'https://script.google.com/macros/s/AKfycbx-MYcLh6t3Sr_c7-E4x1ka7DoFacutLyDmhbDCQD7w35_hMxvmZxNCgv1Z9yiNjyKw/exec';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.form),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        alert('Schedule submitted successfully!');
        this.form = { name: '', email: '', date: '', service: '', address: '', dogSize: '', notes: '' };
      })
      .catch(err => {
        alert('There was an error submitting the schedule.');
        console.error(err);
      });
  }
}


