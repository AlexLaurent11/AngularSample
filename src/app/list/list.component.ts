import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private listData: any;

  constructor(private svc: ListService) { }

  ngOnInit() {
    this.svc.getList().subscribe(data => {
      this.listData = data;
    });
  }

}
