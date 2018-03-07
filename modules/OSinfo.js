var os = require('os');
var timeFormat = require('../modules/timeformat');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows'; 
    } else {
        type = 'Linux';
    }   


    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('Sysytem: ', type);
    console.log('Release ', release);
    console.log('CPU model: ', cpu);
    console.log('Uptime: ', timeFormat.print(uptime));
    console.log('User name: ', userInfo.username);
    console.log('Home dir: ', userInfo.homedir);
}

exports.print = getOSinfo;