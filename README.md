[![NPM version](https://img.shields.io/npm/v/@webacad/ng-store.svg?style=flat-square)](https://www.npmjs.com/package/@webacad/ng-store)
[![Build Status](https://img.shields.io/travis/Web-ACAD/ng-store.svg?style=flat-square)](https://travis-ci.org/Web-ACAD/ng-store)

# WebACAD/NgStore

[Store](https://github.com/marcuswestin/store.js) wrapper for angular.

## Installation

```bash
$ npm install --save store
$ npm install --save @webacad/ng-store
```

or with yarn

```bash
$ yarn add store
$ yarn add @webacad/ng-store
```

## Register the module

```typescript
import {NgModule} from '@angular/core';
import {NgStoreModule} from '@webacad/ng-store';

@NgModule({
    imports: [
        NgStoreModule,
    ],
})
export class AppModule {}
```

## Usage

Simply inject the `NgStore` service into your class:

```typescript
import {NgStore} from '@webacad/ng-store';

export class AuthService
{
    
    constructor(
        private $store: NgStore,
    ) {}
    
}
```

**Available methods:**

* `get(key, default)`: Returns the value from store
* `set(key, value)`: Store a new value
* `remove(key)`: Remove value from the store
