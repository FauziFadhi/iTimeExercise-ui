import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {DataTableDirective} from 'angular-datatables';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {ColorService} from '../color.service';
import {Color} from '../../../../entity/color.model';

@Component({
  selector: 'app-list-color',
  templateUrl: './list-color.component.html',
  styleUrls: ['./list-color.component.scss']
})
export class ListColorComponent implements OnInit, AfterViewInit {

  idDelete: string;
  searchBox: FormGroup;
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private _toastr: ToastrService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _service: ColorService) {
  }

  ngOnInit() {
    const that = this;
    this.searchBox = new FormGroup(
      {
        'name': this._formBuilder.control('')
      }
    );

    this.dtOptions = {
      pagingType: 'full_numbers',
      serverSide: true,
      searching: false,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        const value: Color = this.searchBox.value;
        that._service.datatables(value, dataTablesParameters).subscribe(resp => {
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: resp.data
          });
        }, error => {
          this._toastr.error('Can\' recived the data', 'List category of device');
          callback({
            recordsTotal: 0,
            recordsFiltered: 0,
            data: []
          });
        });
      },
      columns: [
        {data: 'colorId', title: 'ID'},
        {data: 'colorName', title: 'Name'},
        {data: 'colorCode', title: 'Code'},
        {data: 'colorDescription', title: 'Description'},
        {
          data: 'colorId',
          title: 'Action',
          orderable: false,
          render: (data: any, type: any, descriptionrow: any, meta) => {
            return `<button id="action-update" title="Edit Type" class="btn btn-link">
            <span class="fa actionMaster fa-edit"/></button>
                    <button id="action-remove" title="Delete Type" class="btn btn-link">
                    <span class="fa actionMaster fa-trash"/></button>
                    `;
          }
        },
        {
          data: 'colorCode',
          title: 'Color',
          orderable: false,
          render: (data: any, type: any, descriptionrow: any, meta) => {
            return `<p style="background-color : #colorCode "></p>`;
          }
        }
      ],
      rowCallback: (row: Node, data: Color, index: number) => {
        $('button#action-update', row).click(() => {
          this._router.navigate(['master', 'color', data.colorId]);
        });
        $('button#action-remove', row).click(() => {
          this.idDelete = data.colorId;
          document.getElementById('openModal').click();
        });
        return row;
      }
    };
  }

  refresh(data): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  removed(): void {
    this._service.remove(this.idDelete).subscribe(data => {
      if (data.status === 200) {
        this._toastr.warning('Category of device Removed', 'Remove Success',
          {
            timeOut: 4000
          });
        this.refresh(null);
      }
    }, error => {
      this._toastr.warning('Cant Delete Category of device', 'Oppss...',
        {
          timeOut: 4000
        });
      console.error(error);
    });
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
}
