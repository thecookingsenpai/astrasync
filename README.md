# AstraSync

## A way to execute asynchronous tasks within synchronous contexts

AstraSync provides a way to execute asynchronous tasks within synchronous contexts, for example calling an async method from a sync method and waiting for it to resolve before continuing.

## Installation

    npm install -g astrasync

## Usage

    const astraSync = require('astrasync');

    function syncMethod() {
        //... your code
        asyncMethod().then(function (result) {
            promiseStatus.value = result;
            promiseStatus.resolved = true;
        }
        waitForAsync(5); // wait 5 seconds before timing out
    }

## Disclaimer

This module is highly experimental
