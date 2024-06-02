import { Injectable } from '@angular/core';
import { Parfum } from '../shared/models/Parfum';
import { sample_parfums, sample_tags } from '../../data';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PARFUMS_BY_ID_URL, PARFUMS_BY_SEARCH_URL, PARFUMS_BY_TAG_URL, PARFUMS_TAGS_URL, PARFUMS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ParfumService {

  constructor(private http:HttpClient) { }


   getAll(): Observable <Parfum[]>{
    return this.http.get<Parfum[]>(PARFUMS_URL);
  }

  getAllParfumsBySearchTerm(searchTerm:string){
    return this.http.get<Parfum[]>(PARFUMS_BY_SEARCH_URL + searchTerm);
  }


  getAllTags():Observable <Tag[]>{
    return this.http.get<Tag[]>(PARFUMS_TAGS_URL);
  }

  getAllParfumByTag(tag:string): Observable <Parfum[]>{
    return tag === "All"?
    this.getAll():
    this.http.get<Parfum[]>(PARFUMS_BY_TAG_URL + tag);
  }

  getParfumById(parfumId:string):Observable<Parfum>{
   return this.http.get<Parfum>(PARFUMS_BY_ID_URL + parfumId);
  }
  
  
  
}
