/**
 * @description jest server
 * @author ljs
 */
const superTest = require('supertest');

const server = require('../src/app').callback()

module.exports = superTest(server);

