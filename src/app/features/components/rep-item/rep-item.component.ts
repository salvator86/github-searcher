import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {Repository} from "../../../core/interfaces/repository";

@Component({
  selector: 'app-rep-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './rep-item.component.html',
  styleUrls: ['./rep-item.component.css']
})
export class RepItemComponent {
  @Input() repository: Repository;
}
