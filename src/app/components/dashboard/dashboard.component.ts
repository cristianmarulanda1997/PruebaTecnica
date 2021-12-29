import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/service/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  urlimg='https://cdn-icons-png.flaticon.com/512/1116/1116453.png'
  ciudad=''
  temperatura=''
  humedad=''
  clima=''
  query=false
  constructor(private _climaService:ClimaService) { 
    
  }

  ngOnInit(): void {
  }

  obtenerClima():void{
    console.log(this.ciudad)
    this.query=false
    this._climaService.getclima(this.ciudad).subscribe(data=>{

      this.query=true
      this.temperatura=data.main.temp
      this.humedad=data.main.humidity
      this.clima=data.weather[0].main
      console.log(data)
    })
  }

}
