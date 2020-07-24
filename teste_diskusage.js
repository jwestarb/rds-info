var disk = require('diskusage');

// get disk usage. Takes path as first parameter
disk.check('c:', function(err, info) {
	console.log(info.available);
	console.log(info.free);
	console.log(info.total);
});