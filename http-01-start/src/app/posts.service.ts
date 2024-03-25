import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}
  BASE_URL =
    'https://angular-b1c0a-default-rtdb.europe-west1.firebasedatabase.app';

  error = new Subject<string>();

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    // Send Http request
    this.http
      .post<{
        name: string;
      }>(`${this.BASE_URL}/posts.json`, postData, { observe: 'response' })
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        },
      );
  }

  fetchPosts() {
    // Send Http request
    // returnig observable here
    return this.http
      .get<{ [key: string]: Post }>(`${this.BASE_URL}/posts.json`, {
        headers: new HttpHeaders({ 'Custom-header': 'Hello' }),
        params: new HttpParams().set('print', 'pretty'),
      })
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray.reverse();
        }),
        catchError((errorRes) => {
          // send error to analytics serer etc
          return throwError(errorRes);
        }),
      );
  }

  deletePosts() {
    return this.http
      .delete(`${this.BASE_URL}/posts.json`, {
        observe: 'events',
        responseType: 'text'
      })
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        }),
      );
  }
}
