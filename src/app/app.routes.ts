import { Routes } from '@angular/router';

import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
import { StructuralDirective } from './structural-directive/structural-directive';
import { AttributeDirectives } from './attribute-directives/attribute-directives';
import { PageNotFound } from './page-not-found/page-not-found';
import { BuiltInPipes } from './built-in-pipes/built-in-pipes';
import { TemplateDrivenForm } from './template-driven-form/template-driven-form';
import { ReactiveForm } from './reactive-form/reactive-form';

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
	{ path: '**', component: PageNotFound }
];
