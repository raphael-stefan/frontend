import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.html',
  styleUrls: ['./reviews.css']
})
export class Reviews {
  reviews = [
    {
      text: 'Trot Dog Care is absolutely amazing. I trust them with my fur baby every day!',
      author: 'Raissa S., San Bruno'
    },
    
  ];
}
