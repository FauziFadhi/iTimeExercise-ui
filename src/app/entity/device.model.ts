import { Color } from './color.model';
import { Brand } from './brand.model';
import { Condition } from './condition.model';
import { LoanStatus } from './loan-status.model';
import { UnitCapacity } from './unit-capacity.model';
import { CategoryDevice } from './category-device.model';

export class Device{
	deviceNumber : number;
	deviceName : string;
	color : Color;
	brand : Brand;
	unitCapacity : UnitCapacity;
	categoryDevice : CategoryDevice;
	condition : Condition;
	loanStatus : LoanStatus;
	deviceDescription : string;
 }