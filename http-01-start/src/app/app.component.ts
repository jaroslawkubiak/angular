import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;
  error = null;
  private errorSub: Subscription;

  constructor(
    private http: HttpClient,
    private postsService: PostsService,
  ) {}

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });

    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content);
    this.onFetchPosts();
  }

  onFetchPosts() {
    this.error = null;
    this.isFetching = true;
    setTimeout(() => {
      this.postsService.fetchPosts().subscribe(
        (posts) => {
          this.isFetching = false;
          this.loadedPosts = posts;
        },
        (error) => {
          this.isFetching = false;
          this.error = error.error.error;
        },
      );
    }, 1000);
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
    // this.onFetchPosts();
  }
  onHandleError() {
    this.error = null;
  }
  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
