import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  lastDelta = 0;
  showFooter = false;

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent): void {
    const delta = event.deltaY;
    
    if (delta > 0) {
      this.showFooter = true; 
    } else if (delta < 0) {
      this.showFooter = false; 
    }
  }
}
