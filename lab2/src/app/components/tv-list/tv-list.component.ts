import { Component, OnInit } from '@angular/core';
import { TvsService } from 'src/app/services/tvs.service';
import { ITvs } from 'src/app/models/models';


@Component({
  selector: 'app-tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.css']
})
export class TvListComponent implements OnInit {

  tvs?: any = [];
  constructor(private tvsService: TvsService) { }

  getAlltvsFromService() {
     this.tvsService.getAllTvs().subscribe((data: ITvs) =>
     this.tvs = data);
  }

  ngOnInit() {
    this.getAlltvsFromService();
  }

}
