import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {DatatablesModelResponse} from '../../../_model/datatables';
import {UnitCapacity} from '../../../entity/unit-capacity.model';

@Injectable()
export class UnitCapacityService {

  constructor(private _http: HttpClient) {
  }

  public datatables(value: UnitCapacity, datatablesParameters: any) {
    let params = new HttpParams();
    params = params.append('start', datatablesParameters.start);
    params = params.append('length', datatablesParameters.length);
    params = params.append('draw', datatablesParameters.draw);
    params = params.append('order[0][column]', datatablesParameters.order[0]['column']);
    params = params.append('order[0][dir]', datatablesParameters.order[0]['dir']);

    return this._http
      .post<DatatablesModelResponse>(
        `${environment.supportDeviceApi}/master/unit-capacity/datatables`,
        value, {params: params}
      );
  }

  public save(value: UnitCapacity) {
    return this._http.post(`${environment.supportDeviceApi}/master/unit-capacity/`, value);
  }

  public update(value: UnitCapacity) {
    return this._http.put(`${environment.supportDeviceApi}/master/unit-capacity/`, value);
  }


  public getChangeTypes(id: string) {
    return this._http.get(`${environment.supportDeviceApi}/master/unit-capacity/${id}`, {observe: 'response'});
  }

  public remove(id: string) {
    return this._http.delete(`${environment.supportDeviceApi}/master/unit-capacity/${id}`, {observe: 'response'});
  }
}
