/**
 * @description jest server
 * @author ljs
 */
const superTest = require('supertest');

// 定义一个 server 实例
const server = require('../src/app').callback()

module.exports = superTest(server);

