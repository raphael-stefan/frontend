import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Booking } from '../../components/booking/booking';
import { Reviews } from "../../components/reviews/reviews";
import { HowItWorks } from '../../components/how-it-works/how-it-works';
import { ScheduleComponent } from '../../components/schedule/schedule';
import { Footer } from '../../components/footer/footer';



@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [Navbar, Booking, HowItWorks, Reviews, ScheduleComponent, Footer],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.css']
})
export class Pricing {}
