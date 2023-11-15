import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GithubService} from "../../../core/services/github.service";
import {RepItemComponent} from "../rep-item/rep-item.component";
import {Repository} from "../../../core/interfaces/repository";

@Component({
  selector: 'app-rep-list',
  standalone: true,
  imports: [CommonModule, RepItemComponent],
  templateUrl: './rep-list.component.html',
  styleUrls: ['./rep-list.component.css']
})
export class RepListComponent implements OnInit {

  repoList: Repository[];

  githubService: GithubService = inject(GithubService);

  ngOnInit(): void {
    this.githubService.RepList.subscribe(data => {
      this.repoList = data;
    });
  }

}
