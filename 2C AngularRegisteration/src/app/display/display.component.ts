import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import User from '../User';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  title = "Display Page";

  @Input() users!: User[];

   @Output() exit = new EventEmitter<boolean>();

   onExit(){
    this.exit.emit(false);
   }

}
