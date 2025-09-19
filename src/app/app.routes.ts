import { Routes } from '@angular/router';

import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
import { StructuralDirective } from './structural-directive/structural-directive';
import { AttributeDirectives } from './attribute-directives/attribute-directives';
import { PageNotFound } from './page-not-found/page-not-found';
import { BuiltInPipes } from './built-in-pipes/built-in-pipes';
import { TemplateDrivenForm } from './template-driven-form/template-driven-form';
import { ReactiveForm } from './reactive-form/reactive-form';
import { Profile } from './profile/profile';
import { CrudOperations } from './crud-operations/crud-operations';
import { AddUser } from './add-user/add-user';
import { UpdateUser } from './update-user/update-user';
import { ViewUser } from './view-user/view-user';
import { ResourceApi } from './resource-api/resource-api';
import { Reusable } from './reusable/reusable';
import { Parent } from './parent/parent';
import { Child } from './child/child';

export const routes: Routes = [
	// { path: '', component: User },
	{ path: '', redirectTo: 'user', pathMatch: 'full' },
	{ path: 'user', component: User },
	{ path: 'data-binding', component: DataBinding },
	{ path: 'structural-directive', component: StructuralDirective },
	{ path: 'attribute-directive', component: AttributeDirectives },
	{ path: 'built-in-pipes', component: BuiltInPipes },
	{ path: 'tdf', component: TemplateDrivenForm },
	{ path: 'rf', component: ReactiveForm},
	{ path: 'profile', component: Profile},
	{ path: 'crud', component: CrudOperations},
	{ path: 'adduser', component: AddUser},
	{ path: 'updateuser/:id', component: UpdateUser},
	{ path: 'viewuser/:id', component: ViewUser},
	{ path: 'resource-api', component: ResourceApi},
	{ path: 'reusable', component: Reusable},
	{ path: 'parent', component: Parent},
	{ path: 'child', component: Child},
	{ path: '**', component: PageNotFound }
];
