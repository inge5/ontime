import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { merge, Observable, throwError } from 'rxjs';
import { map, catchError, concatAll, concatMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public urlMenu: string;

  public urlSmartsuite: string;

  public urlSmartsales: string;
  public urlMenuSmartsales: string;
  
  public urlMobileForms: string;
  public urlMenuMobileForms: string;

  public urlOneCheck: string;
  public urlMenuOneCheck: string;

  public urlOnTime: string;
  public urlMenuOnTime: string;

  public urlCareTask: string;
  public urlMenuCareTask: string;

  public urlInTrack: string;
  public urlMenuInTrack: string;
  

  constructor(private _http: HttpClient) {
    this.urlMenu = environment.urlMenu;

    this.urlSmartsuite = environment.urlSmartsuite;

    this.urlSmartsales = environment.urlSmartsales;
    this.urlMenuSmartsales = environment.urlMenuSmartsales;

    this.urlMobileForms = environment.urlMobileForms;
    this.urlMenuMobileForms = environment.urlMenuMobileForms;

    this.urlOneCheck = environment.urlOneCheck;
    this.urlMenuOneCheck = environment.urlMenuOneCheck;

    this.urlOnTime = environment.urlOnTime;
    this.urlMenuOnTime = environment.urlMenuOnTime;

    this.urlCareTask = environment.urlCareTask;
    this.urlMenuCareTask = environment.urlMenuCareTask;

    this.urlInTrack = environment.urlInTrack;
    this.urlMenuInTrack = environment.urlMenuInTrack;
  }

  /* HOME */
  getHome(): Observable<any>{
    return this._http.get(`${this.urlSmartsuite}/pages/2/`, {})
    .pipe(
        map((res: any) => {
          return res['acf'];
    })
  )}
  getHomeSmartsales(): Observable<any>{
    return this._http.get(`${this.urlSmartsales}/pages/2/`, {})
    .pipe(
        map((res: any) => {
          return res['acf'];
    })
  )}
  getHomeMobileForms(): Observable<any>{
    return this._http.get(`${this.urlMobileForms}/pages/2/`, {})
    .pipe(
        map((res: any) => {
          return res['acf'];
    })
  )}
  getHomeOneCheck(): Observable<any>{
    return this._http.get(`${this.urlOneCheck}/pages/2/`, {})
    .pipe(
        map((res: any) => {
          return res['acf'];
    })
  )}
  getHomeOnTime(): Observable<any>{
    return this._http.get(`${this.urlOnTime}/pages/2/`, {})
    .pipe(
        map((res: any) => {
          return res['acf'];
    })
  )}
  getHomeCareTask(): Observable<any>{
    return this._http.get(`${this.urlCareTask}/pages/2/`, {})
    .pipe(
        map((res: any) => {
          return res['acf'];
    })
  )}
  getHomeInTrack(): Observable<any>{
    return this._http.get(`${this.urlInTrack}/pages/2/`, {})
    .pipe(
        map((res: any) => {
          return res['acf'];
    })
  )}
  
  /* PRICES */
  getPriceSmartsales(): Observable<any>{
    return this._http.get(`${this.urlSmartsales}/pages/100/`, {})
    .pipe(
        map((res: any) => {
          return res['acf'];
    })
  )}
  getPriceMobileforms(): Observable<any>{
    return this._http.get(`${this.urlMobileForms}/pages/5/`, {})
    .pipe(
        map((res: any) => {
          return res['acf'];
    })
  )}

  /* Menu */
  getMenuPrincipal(): Observable<any>{
    return this._http.get(`${this.urlMenu}/2`);
  }
  getMenuDemo(): Observable<any>{
    return this._http.get(`${this.urlMenu}/3`);
  }
  getMenuProductos(): Observable<any>{
    return this._http.get(`${this.urlMenu}/4`);
  }
  getMenuEnigma(): Observable<any>{
    return this._http.get(`${this.urlMenu}/5`);
  }
  getMenuInicioSesion(): Observable<any>{
    return this._http.get(`${this.urlMenu}/6`);
  }

  /* WIDGETS */
  getWidgets(): Observable<any>{
    return this._http.get(`${this.urlSmartsuite}/widgets`);
  }

  /* SUBMENUS */
  getMenuSmartsales(): Observable<any>{
    return this._http.get(`${this.urlMenuSmartsales}/2`);
  }
  getMenuMobileForms(): Observable<any>{
    return this._http.get(`${this.urlMenuMobileForms}/2`);
  }
  getMenuOneCheck(): Observable<any>{
    return this._http.get(`${this.urlMenuOneCheck}/2`);
  }
  getMenuOnTime(): Observable<any>{
    return this._http.get(`${this.urlMenuOnTime}/2`);
  }
  getMenuCareTask(): Observable<any>{
    return this._http.get(`${this.urlMenuCareTask}/2`);
  }
  getMenuInTrack(): Observable<any>{
    return this._http.get(`${this.urlMenuInTrack}/2`);
  }
}
