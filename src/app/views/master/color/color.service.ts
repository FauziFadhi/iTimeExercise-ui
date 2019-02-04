import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {DatatablesModelResponse} from '../../../_model/datatables';
import { Observable } from 'rxjs';
import {Color} from '../../../entity/color.model';

@Injectable()
export class ColorService {

  constructor(private _http: HttpClient) {
  }

  public datatables(value: Color, datatablesParameters: any) {
    let params = new HttpParams();
    params = params.append('start', datatablesParameters.start);
    params = params.append('length', datatablesParameters.length);
    params = params.append('draw', datatablesParameters.draw);
    params = params.append('order[0][column]', datatablesParameters.order[0]['column']);
    params = params.append('order[0][dir]', datatablesParameters.order[0]['dir']);

    return this._http
      .post<DatatablesModelResponse>(
        `${environment.supportDeviceApi}/master/color/datatables`,
        value, {params: params}
      );
  }

  public all() : Observable<Color[]>{
    return this._http.get<Color[]>(`${environment.supportDeviceApi}/master/color/list`);
  }
  
  public save(value: Color) {
    return this._http.post(`${environment.supportDeviceApi}/master/color/`, value);
  }

  

  public update(value: Color) {
    return this._http.put(`${environment.supportDeviceApi}/master/color/`, value);
  }


  public getChangeTypes(id: string) {
    return this._http.get(`${environment.supportDeviceApi}/master/color/${id}`, {observe: 'response'});
  }

  public remove(id: string) {
    return this._http.delete(`${environment.supportDeviceApi}/master/color/${id}`, {observe: 'response'});
  }
}
