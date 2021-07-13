import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { cartItem } from '../interface/cartItem';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  public getCarts(): Observable <any>{
    const cartUrl = 'http://localhost:3000/carts';
    return this.http
      .get<any>(cartUrl,httpOptions)
      .pipe(catchError(this.handleError));
  }

  public postCart(cartItem:any): Observable <any>{
    const cartUrl = 'http://localhost:3000/carts';
    return this.http
      .post<any>(cartUrl,cartItem,httpOptions)
      .pipe(catchError(this.handleError));
  }

  public deleteCart():Observable <any>{
    const cartUrl = 'http://localhost:3000/carts/1';
    return this.http
      .delete(cartUrl, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getProducts(): Observable<any>{
    const productUrl = 'http://localhost:3000/products';
    return this.http
      .get<any>(productUrl,httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
