import { Component, OnInit } from '@angular/core';
import { SquareCardComponent } from '../component/square-card/square-card.component';
import { RectangleCardComponent } from '../component/rectangle-card/rectangle-card.component';
import { CommonModule } from '@angular/common';
import { ImageChangeComponent } from '../component/image-change/image-change.component';

import { BlogPost } from '../../interface/listing.model';
import { BlogsService } from '../../services/blogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  imports: [
    SquareCardComponent,
    RectangleCardComponent,
    CommonModule,
    ImageChangeComponent,
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent implements OnInit {
  allBlogs: any[] = [];
  section1Blogs: BlogPost[] = [];
  section2Blogs: BlogPost[] = [];
  section3Blogs: BlogPost[] = [];
  section4Blogs: BlogPost[] = [];

  // Visible blogs for expandable sections
  visibleSection1: BlogPost[] = [];
  visibleSection4: BlogPost[] = [];

  showAllSection1 = false;
  showAllSection4 = false;

  constructor(private blog: BlogsService, private router: Router) {}

  ngOnInit(): void {
    this.blog.getBlogs().subscribe((data) => {
      if (data) {
        this.allBlogs = data;
        console.log(this.allBlogs);

        // Filter blogs by section
        this.section1Blogs = this.getBlogsBySection(1);
        this.section2Blogs = this.getBlogsBySection(2);
        this.section3Blogs = this.getBlogsBySection(3);
        this.section4Blogs = this.getBlogsBySection(4);

        // Initialize visible blogs
        this.updateVisibleSection1();
        this.updateVisibleSection4();
      }
    });
  }

  getBlogsBySection(section: number): BlogPost[] {
    return this.allBlogs
      .filter((blog) => blog.section_order === section)
      .sort((a, b) => a.display_order - b.display_order);
  }

  // Remove the fallback that causes repetition
  getBlog(section: number, order: number): BlogPost | undefined {
    return this.allBlogs.find(
      (blog) => blog.section_order === section && blog.display_order === order
    );
  }

  toggleSection1() {
    this.showAllSection1 = !this.showAllSection1;
    this.updateVisibleSection1();
  }

  private updateVisibleSection1() {
    this.visibleSection1 = this.showAllSection1
      ? this.section1Blogs
      : this.section1Blogs.slice(0, 6);
  }

  toggleSection4() {
    this.showAllSection4 = !this.showAllSection4;
    this.updateVisibleSection4();
  }

  private updateVisibleSection4() {
    this.visibleSection4 = this.showAllSection4
      ? this.section4Blogs
      : this.section4Blogs.slice(0, 6);
  }

  OnClickById(blog: any) {
    console.log(blog);
    this.router.navigate(['blogs', blog._id]);
  }
}
