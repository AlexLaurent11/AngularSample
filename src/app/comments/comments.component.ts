import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  private commentsData: any;

  constructor(private svc: CommentsService, private route: ActivatedRoute) { }

    ngOnInit() {
      const id = this.route.snapshot.params.id;
      this.svc.getCommentsById(id).subscribe(data => {
        this.commentsData = data;
      });
    }

}
