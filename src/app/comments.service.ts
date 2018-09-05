import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

    private url = "https://jsonplaceholder.typicode.com/comments";

    constructor(private http: HttpClient) { }

    /*getComments(): Observable<any> {
    return this.http.get<any>(this.url);
  }*/

    getCommentsById(id: string): Observable<any> {
      const url = `${this.url}?postId=${id}`;
      return this.http.get<any>(url);
    }
}
