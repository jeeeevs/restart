import assert from 'assert';

import {getFromConfig, getPort} from '../../../src/helpers/configHelper'

describe('#helpers/configHelper',()=>{
    describe('#getFromConfig',()=>{
        it('should return PORT configured in develop config',()=>{
            assert.equal(getFromConfig('PORT','develop'),4000)
        })
    });
    describe('#getPort',()=>{
        it('should return PORT configured in develop config',()=>{
            assert.equal(getPort(),4000)
        })
    })
})