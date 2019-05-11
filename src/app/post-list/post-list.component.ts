import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public posts = [];

  constructor(private _postService: PostServiceService) { }

  ngOnInit() {
    this._postService.getPosts()
      .subscribe(data => this.posts = data)

  }

}
