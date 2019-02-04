import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {DatatablesModelResponse} from '../../../_model/datatables';
import {Condition} from '../../../entity/condition.model';

@Injectable()
export class ConditionService {

  constructor(private _http: HttpClient) {
  }

  public datatables(value: Condition, datatablesParameters: any) {
    let params = new HttpParams();
    params = params.append('start', datatablesParameters.start);
    params = params.append('length', datatablesParameters.length);
    params = params.append('draw', datatablesParameters.draw);
    params = params.append('order[0][column]', datatablesParameters.order[0]['column']);
    params = params.append('order[0][dir]', datatablesParameters.order[0]['dir']);

    return this._http
      .post<DatatablesModelResponse>(
        `${environment.supportDeviceApi}/master/condition/datatables`,
        value, {params: params}
      );
  }

  public save(value: Condition) {
    return this._http.post(`${environment.supportDeviceApi}/master/condition/`, value);
  }

  public update(value: Condition) {
    return this._http.put(`${environment.supportDeviceApi}/master/condition/`, value);
  }


  public getChangeTypes(id: string) {
    return this._http.get(`${environment.supportDeviceApi}/master/condition/${id}`, {observe: 'response'});
  }

  public remove(id: string) {
    return this._http.delete(`${environment.supportDeviceApi}/master/condition/${id}`, {observe: 'response'});
  }
}
