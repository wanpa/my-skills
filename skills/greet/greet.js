#!/usr/bin/env node
// greet.js - システム情報と一緒に挨拶を表示するスクリプト

const os = require('os');
const path = require('path');

const now = new Date();
const dateStr = now.toLocaleString('ja-JP', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});

console.log('==================================');
console.log('  Hello, World from Node.js!');
console.log('==================================');
console.log('');
console.log('System Information:');
console.log(`  User:     ${os.userInfo().username}`);
console.log(`  Hostname: ${os.hostname()}`);
console.log(`  Date:     ${dateStr}`);
console.log(`  OS:       ${os.type()} ${os.release()}`);
console.log(`  Node:     ${process.version}`);
console.log(`  PWD:      ${process.cwd()}`);
console.log(`  Platform: ${os.platform()} (${os.arch()})`);
console.log(`  Memory:   ${Math.round(os.freemem() / 1024 / 1024)}MB free / ${Math.round(os.totalmem() / 1024 / 1024)}MB total`);
console.log('');
console.log('==================================');
console.log('  Have a great day!');
console.log('==================================');
