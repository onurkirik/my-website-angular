import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    private _httpClient: HttpClient,
    @Inject("baseUrl") public baseUrl: string
  ) { }

  private url(_requestParameter: Partial<RequestParameters>): string {
    return `${_requestParameter.baseUrl ? _requestParameter.baseUrl : this.baseUrl}/${_requestParameter.controller}${_requestParameter.action ? `/${_requestParameter.action}` : ""}`;
  }

  public get<T>(_requestParameter: Partial<RequestParameters>, id?:string) : Observable<T> {
    let url: string;
    if (_requestParameter.fullEndpoint)
      url = _requestParameter.fullEndpoint;
    else
      url = `${this.url(_requestParameter)}${id ? `${id}` : ""}`;

    return this._httpClient.get<T>(url, { headers: _requestParameter.headers });
  }

  post<T>(_requestParameter: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = "";

    if (_requestParameter.fullEndpoint) {
      url = _requestParameter.fullEndpoint;
    }
    else {
      url = `${this.url(_requestParameter)}`;
    }

    return this._httpClient.post<T>(url, body, { headers: _requestParameter.headers });

  }

  put<T>(_requestParameter: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = "";

    if (_requestParameter.fullEndpoint)
      url = _requestParameter.fullEndpoint;
    else
      url = `${this.url(_requestParameter)}`;

    return this._httpClient.put<T>(url, body, { headers: _requestParameter.headers });
  }

  delete<T>(_requestParameter: Partial<RequestParameters>, id: string): Observable<T> {
    let url: string = "";
    if (_requestParameter.fullEndpoint)
      url = _requestParameter.fullEndpoint;
    else
      url = `${this.url(_requestParameter)}/${id}`;

    return this._httpClient.delete<T>(url, { headers: _requestParameter.headers });
  }

}

export class RequestParameters {
  controller?: string;
  action?: string;
  id?: number;

  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndpoint?: string;
}