import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {DatatablesModelResponse} from '../../../_model/datatables';
import {Brand} from '../../../entity/brand.model';

@Injectable()
export class BrandService {

  constructor(private _http: HttpClient) {
  }

  public datatables(value: Brand, datatablesParameters: any) {
    let params = new HttpParams();
    params = params.append('start', datatablesParameters.start);
    params = params.append('length', datatablesParameters.length);
    params = params.append('draw', datatablesParameters.draw);
    params = params.append('order[0][column]', datatablesParameters.order[0]['column']);
    params = params.append('order[0][dir]', datatablesParameters.order[0]['dir']);

    return this._http
      .post<DatatablesModelResponse>(
        `${environment.supportDeviceApi}/master/brand/datatables`,
        value, {params: params}
      );
  }

  public save(value: Brand) {
    return this._http.post(`${environment.supportDeviceApi}/master/brand/`, value);
  }

  public update(value: Brand) {
    return this._http.put(`${environment.supportDeviceApi}/master/brand/`, value);
  }


  public getChangeTypes(id: string) {
    return this._http.get(`${environment.supportDeviceApi}/master/brand/${id}`, {observe: 'response'});
  }

  public remove(id: string) {
    return this._http.delete(`${environment.supportDeviceApi}/master/brand/${id}`, {observe: 'response'});
  }
}
