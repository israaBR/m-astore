import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../shared/models/Tag';
import { ParfumService } from '../../../services/parfum.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})

export class TagsComponent implements OnInit{
  tags?:Tag[];
  constructor(parfumService:ParfumService){
     parfumService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
     });
    }

  ngOnInit(): void {
      
  }

}
