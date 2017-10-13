'use strict';


var assert = require('assert');
var helpers = require('yeoman-test');
var path = require('path');


describe('App should exist', function () {
        it('', function () {
            var app = require("../generators/app");
            assert
            app != undefined;
        });
    }
);

describe('Generator core', function () {
    it('Should execute GenerateProject', function () {

        return helpers.run(path.join(__dirname, '../generators/app'))
            .withPrompts();

    });
});