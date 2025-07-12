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
      author: 'Emma R., SoMa'
    },
    {
      text: 'The walkers are dependable and kind. My pup is always excited to see them!',
      author: 'Jason M., Mission District'
    }
  ];
}
