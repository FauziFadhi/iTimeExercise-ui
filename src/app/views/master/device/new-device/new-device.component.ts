import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DeviceService} from '../device.service';
import {ColorService} from '../../color/color.service';
import {Device} from '../../../../entity/device.model';
import {Color} from '../../../../entity/color.model';

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.scss']
})
export class NewDeviceComponent implements OnInit {

  form: FormGroup;
  colors : Color[];
  submitted = false;

  constructor(
    private _router: Router,
    private _service: DeviceService,
    private _colorService: ColorService,
    private _toastr: ToastrService,
    private _formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      'name': this._formBuilder.control(''),
      'description': this._formBuilder.control('')
    });

    this._colorService.all().subscribe(data=>{
      this.colors = data
      console.log(data)
    });
  }

  send(data): void {
    this.submitted = true;
    if (this.form.invalid) {
      this._toastr.warning('Field Not Allowed Empty', 'Can\'t Save Change Type',
        {
          timeOut: 5000
        });
      return;
    }

    const value: Device = this.form.value;
    this._service.save(value).subscribe(resp => {
      this._toastr.info('New Category of Device Saved', 'Save Success');
      this._router.navigate(['master', 'device']);
    }, error => {
      this._toastr.warning('There is something error', 'Oopss....');
    });
  }

  get f() {
    return this.form.controls;
  }
}
