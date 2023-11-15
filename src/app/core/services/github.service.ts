import { Injectable } from '@angular/core';
import { Octokit } from '@octokit/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  RepList: Subject<any> = new BehaviorSubject([]);

  isLoading: boolean = false;
  isFirstTimeTake: boolean = true;

  private octokit: Octokit;
  private API_KEY: string = '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';

  constructor() {
    this.octokit = new Octokit({ auth: this.API_KEY });
  }

  async searchRepositories(query: string): Promise<null | void> {
    this.isLoading = true;
    try {
      const response = await this.octokit.request('GET /search/repositories', {
        q: query
      });
      this.RepList.next(await response.data.items);
      this.isFirstTimeTake = false;
      this.isLoading = false;
    } catch (error) {
      console.error('Error occurred: ', error);
      this.isLoading = false;
      return null;
    }
  }
}
