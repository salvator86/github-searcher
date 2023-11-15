import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {GithubService} from "../../../core/services/github.service";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ]
})
export class SearchBarComponent implements OnInit {

  repoList: [];

  githubService: GithubService = inject(GithubService);

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      searchInput: new FormControl(''),
    });
  }

  searchRepositories(form: FormGroup): void {
    const value = form.value.searchInput;
    if (value) {
      this.githubService.searchRepositories(value).then();
    }
  }

}
