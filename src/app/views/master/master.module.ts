import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MasterRouting} from './master.routing';
import {ListCategoryDeviceComponent} from './category-device/list-category-device/list-category-device.component';
import {NewCategoryDeviceComponent} from './category-device/new-category-device/new-category-device.component';
import {UpdateCategoryDeviceComponent} from './category-device/update-category-device/update-category-device.component';
import {ListBrandComponent} from './brand/list-brand/list-brand.component';
// import {NewBrandComponent} from './brand/new-brand/new-brand.component';
// import {UpdateBrandComponent} from './brand/update-brand/update-brand.component';
import {ListColorComponent} from './color/list-color/list-color.component';
// import {NewColorComponent} from './color/new-color/new-color.component';
// import {UpdateColorComponent} from './color/update-color/update-color.component';
import {ListConditionComponent} from './condition/list-condition/list-condition.component';
// import {NewConditionComponent} from './condition/new-condition/new-condition.component';
// import {UpdateConditionComponent} from './condition/update-condition/update-condition.component';
import {ListDeviceComponent} from './device/list-device/list-device.component';
import {NewDeviceComponent} from './device/new-device/new-device.component';
// import {UpdateDeviceComponent} from './device/update-device/update-device.component';
import {ListLoanStatusComponent} from './loan-status/list-loan-status/list-loan-status.component';
// import {NewLoanStatusComponent} from './loan-status/new-loan-status/new-loan-status.component';
// import {UpdateLoanStatusComponent} from './loan-status/update-loan-status/update-loan-status.component';
import {ListUnitCapacityComponent} from './unit-capacity/list-unit-capacity/list-unit-capacity.component';
// import {NewUnitCapacityComponent} from './unit-capacity/new-unit-capacity/new-unit-capacity.component';
// import {UpdateUnitCapacityComponent} from './unit-capacity/update-unit-capacity/update-unit-capacity.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {CategoryDeviceService} from './category-device/category-device.service';
import {BrandService} from './brand/brand.service';
import {ConditionService} from './condition/condition.service';
import {ColorService} from './color/color.service';
import {DeviceService} from './device/device.service';
import {LoanStatusService} from './loan-status/loan-status.service';
import {UnitCapacityService} from './unit-capacity/unit-capacity.service';
import {AuthenticationInterceptor} from '../../_auth/auth.interceptor';
import {DataTablesModule} from 'angular-datatables';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {AlertModule, ModalModule} from 'ngx-bootstrap';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    MasterRouting,
    AlertModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    ModalModule.forRoot(),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [
    ListBrandComponent,
    // NewBrandComponent,
    // UpdateBrandComponent
    ListColorComponent,
    // NewColorComponent,
    // UpdateColorComponent
    ListConditionComponent,
    // NewConditionComponent,
    // UpdateConditionComponent
    ListDeviceComponent,
    NewDeviceComponent,
    // UpdateDeviceComponent
    ListLoanStatusComponent,
    // NewLoanStatusComponent,
    // UpdateLoanStatusComponent
    ListUnitCapacityComponent,
    // NewUnitCapacityComponent,
    // UpdateUnitCapacityComponent
    ListCategoryDeviceComponent,
    NewCategoryDeviceComponent,
    UpdateCategoryDeviceComponent
  ], providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthenticationInterceptor
    },
    CategoryDeviceService,
    BrandService,
    ColorService,
    DeviceService,
    LoanStatusService,
    UnitCapacityService,
    ConditionService
  ]
})
export class MasterModule {
}
