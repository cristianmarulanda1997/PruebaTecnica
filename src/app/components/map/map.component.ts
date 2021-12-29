import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
 
  lat =  6.217;
  lng =  -75.567;
  zoom:number;
  

  constructor() { 
    this.zoom=6
    
  }

  ngOnInit(): void {
  }

}
