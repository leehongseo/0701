import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Data } from './data';
import { ajax } from 'rxjs/ajax';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable()
export class CommonService {

  //http header객체
  private headers:HttpHeaders = new HttpHeaders();
  private baseUrl:string='http://localhost:3000/';

  constructor(protected _http:HttpClient) {
    this.headers.append('Content-Type', 'application/json; charset=utf-8');
    this.headers.append('Accept', 'application/json; charset=utf-8');
  }

  protected setInitHeaders(headers:Map<string,string>){
    headers.forEach((element,key) => {
      this.headers.append(key, element);
    });
  }

  protected generateParamFromMap(paramMap:Map<string,any>):string{
    let paramStr : string = '';
    paramMap.forEach((element,key)=>{
      paramStr += key +'=' + JSON.stringify(element) + '&';
    })
    return paramStr.substr(0,paramStr.length-1);
  }

  protected generateParamFromObject(paramMap:Object):string{
    let paramStr : string = '?';
    Object.keys(paramMap).forEach((key)=>{
      paramStr += key +'=' + paramMap[key] + '&';
    })
    return paramStr.substr(0,paramStr.length-1);
  }

  protected select(data:Data):Observable<any>{
    if(!data.method || data.method=='get'){
      let url = data.url + '?' + data.params;
      return this.getJson(url);
    }
    return this.postJson(data.url, data.params);
  }

  protected getJson(url:string):Observable<any>{
    url = this.baseUrl + url;
    return this._http.get(url);
  }

  protected getJsonAjax(url:string){
    url = this.baseUrl + url;
    return ajax(url).pipe(
      retry(3), // Retry up to 3 times before failing
      map(res => {
        if (!res.response) {
          throw new Error('Value expected!');
        }else if(res.response.err){
          alert(`errCode : ${res.response.err}, errMsg: ${res.response.msg}`);
          throw new Error(res.response);
        }
        return res.response;
      }),
      catchError(err=>err.code=='404'?new Error('not Found'):err)
    );
  }

  protected postJson(url:string,paramObj:Object):Observable<any>{
    url = this.baseUrl + url;
    return this._http.post(url,
          paramObj,
          {headers: this.headers});
  }
 
}