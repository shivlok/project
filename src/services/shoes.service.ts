import { Injectable } from '@angular/core';
import { Shoe } from '../shared/shoe';
import { map,catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Observable,of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {
 shoe:Shoe;
 
 
  constructor(private http:HttpClient,
    private processHTTPMsgService:ProcessHTTPMsgService) { }

  getShoes() : Observable<Shoe[]>{
   return this.http.get<Shoe[]>(baseURL+'shoes')
   .pipe(catchError(this.processHTTPMsgService.handleError));
    
}

getShoe(id:string) : Observable<Shoe>{
  return this.http.get<Shoe>(baseURL+'shoes/'+id)
  .pipe(catchError(this.processHTTPMsgService.handleError));
}
getFeaturedShoe():Observable<Shoe[]> {
  return this.http.get<Shoe[]>(baseURL + 'shoes?featured=true')
   .pipe(catchError(this.processHTTPMsgService.handleError));

}

getShoeIds():Observable<string[] | any>{
  return this.getShoes().pipe(map(shoes=>shoes.map(shoe=>shoe.id)))
  .pipe(catchError(error => error));
} 

}