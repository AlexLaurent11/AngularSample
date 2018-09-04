import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  private commentsData: any;

  constructor(private svc: CommentsService) { }

    ngOnInit() {
      this.svc.getComments().subscribe(data => {
        this.commentsData = data;
      });
    }

}
