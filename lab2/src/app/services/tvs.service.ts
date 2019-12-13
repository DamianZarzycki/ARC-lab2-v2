import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = `https://lab2v1-dot-arc-pjatk.appspot.com/api1/v1/tvs`;
const postUrl = `https://lab2v2-dot-arc-pjatk.appspot.com/api2/v1/tvs`;

@Injectable({
  providedIn: 'root'
})
export class TvsService {

  constructor(public http: HttpClient) { }

  getAllTvs() {
    return this.http.get(url);
  }

  addTV(
    brand,
    contrast,
    format,
    resolution,
    type,
  ) {
    return this.http.post(postUrl + `?brand=${brand}&contrast=${contrast}&format=${format}&resolution=${resolution}&type=${type}`, {
      'Content-Type': 'application/json'
    }).subscribe(
      (val) => {
        console.log('POST call successful value returned in body',
          val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
    {
    }
  }



}
