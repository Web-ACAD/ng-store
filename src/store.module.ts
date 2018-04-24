import {NgModule} from '@angular/core';

import {NgStore} from './store.service';


@NgModule({
	providers: [
		NgStore,
	],
})
export class NgStoreModule {}
