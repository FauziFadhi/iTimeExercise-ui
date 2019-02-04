import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCategoryDeviceComponent} from './category-device/list-category-device/list-category-device.component';
import {NewCategoryDeviceComponent} from './category-device/new-category-device/new-category-device.component';
import {NewDeviceComponent} from './device/new-device/new-device.component';
import {UpdateCategoryDeviceComponent} from './category-device/update-category-device/update-category-device.component';
import {ListBrandComponent} from './brand/list-brand/list-brand.component';
import {ListColorComponent} from './color/list-color/list-color.component';
import {ListConditionComponent} from './condition/list-condition/list-condition.component';
import {ListDeviceComponent} from './device/list-device/list-device.component';
import {ListLoanStatusComponent} from './loan-status/list-loan-status/list-loan-status.component';
import {ListUnitCapacityComponent} from './unit-capacity/list-unit-capacity/list-unit-capacity.component';
// import {NewCategoryDeviceComponent} from './category-device/new-category-device/new-category-device.component';
// import {UpdateCategoryDeviceComponent} from './category-device/update-category-device/update-category-device.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Master'
    },
    children: [
      {
        path: 'category-device',
        component: ListCategoryDeviceComponent,
        data: {
          title: 'Category of Devices'
        }
      },
      {
        path: 'category-device/new',
        component: NewCategoryDeviceComponent,
        data: {
          title: 'New category of device'
        }
      },
      {
        path: 'device/new',
        component: NewDeviceComponent,
        data: {
          title: 'New device'
        }
      },
      {
        path: 'category-device/:id',
        component: UpdateCategoryDeviceComponent,
        data: {
          title: 'Update a category of device'
        }
      },
      {
        path: 'brand',
        component: ListBrandComponent,
        data: {
          title: 'Brands'
        }
      },
      {
        path: 'color',
        component: ListColorComponent,
        data: {
          title: 'Color'
        }
      },
      {
        path: 'condition',
        component: ListColorComponent,
        data: {
          title: 'Condition'
        }
      },
      {
        path: 'device',
        component: ListDeviceComponent,
        data: {
          title: 'Device'
        }
      },
      {
        path: 'loan-status',
        component: ListLoanStatusComponent,
        data: {
          title: 'loan Status'
        }
      },
      {
        path: 'unit-capacity',
        component: ListUnitCapacityComponent,
        data: {
          title: 'Unit Capacity'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRouting {
}
