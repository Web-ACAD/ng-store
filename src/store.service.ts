import {Injectable} from '@angular/core';
import * as store from 'store';


@Injectable()
export class NgStore
{


	public get<T = any>(key: string, optionalDefaultValue?: T): T
	{
		return store.get(key, optionalDefaultValue);
	}


	public set<T = any>(key: string, value: T): T
	{
		return store.set(key, value);
	}


	public remove(key: string): void
	{
		store.remove(key);
	}

}
