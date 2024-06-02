import { Component, OnInit } from '@angular/core';
import { Parfum } from '../../../shared/models/Parfum';
import { ParfumService } from '../../../services/parfum.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls : ['./home.component.css']
})


export class HomeComponent implements OnInit{

  parfums:Parfum[] = [];

  constructor(private parfumService:ParfumService, activatedRoute:ActivatedRoute){
    let parfumObservalbe:Observable<Parfum[]>;
    activatedRoute.params.subscribe((params) => {
  if (params.searchTerm)
    parfumObservalbe = this.parfumService.getAllParfumsBySearchTerm(params.searchTerm);
    else if (params.tag)
      parfumObservalbe = this.parfumService.getAllParfumByTag(params.tag);
      else
      parfumObservalbe = parfumService.getAll();
      parfumObservalbe.subscribe((serverParfums)=>{
        this.parfums = serverParfums;
      })
        })
      }
      
        ngOnInit(): void {
    
   }
  }
