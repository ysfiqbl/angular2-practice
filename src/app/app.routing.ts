import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { DistributorComponent } from './distributor/distributor.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/employees',
		pathMatch: 'full'
	},
	{
		path: 'employees',
		component: EmployeeListComponent
	},
	{
		path: 'employees/add',
		component: EmployeeAddComponent
	},
	{
		path: 'employees/:id/edit',
		component: EmployeeEditComponent
	},
	{
		path: 'employees/:id',
		component: EmployeeDetailComponent
	},
	{
		path: 'distributors',
		component: DistributorComponent
	}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);