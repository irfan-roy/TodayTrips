import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogPost } from '../interface/listing.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:8080/blogs';

  getBlogs(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.url);
  }

  getBlogById(id: any): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${this.url}/${id}`);
  }
}
