const config = require('./config');

const util = require('util');
const nrc = require('node-run-cmd');
const express = require('express')
const app = express()

const port = config.web.port;
const servers = config.servers;
const command = config.command;

var rds_info = {}

servers.forEach(function(item){
	rds_info[item] = {'ativos': 0, 'inativos': 0, 'total': 0};
});

function intervalFunc(server) {
  	util.log(util.format('Verificando conexões em: %s a cada %d segundos...', server, config.execQueryInterval/1000));
	let dados = '';
	
	let dataCallback = function(data) {
		dados += data; 
	};

	let doneCallback = function(code) {
		var ativos = 0;
		var inativos = 0;
		let linhas = dados.split(/(?:\r\n|\r|\n)/g);
		linhas.forEach(function(value){
			let conn_info = value.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
			if (conn_info[0] && conn_info[0] != 'USERNAME') {
				//util.log(conn_info[0] + " - " + conn_info[3] + " - " + conn_info[4]);
				if (conn_info[4] == '.'){
					ativos = ativos +  1;
				} else {
					inativos = inativos + 1;
				}
			}
		});
		rds_info[server]['ativos'] = ativos;
		rds_info[server]['inativos'] = inativos;
		rds_info[server]['total'] = ativos + inativos;
		util.log('Finalizado em ' + server + '=> A:' + ativos + '/I: ' + inativos + '/T: ' + (ativos + inativos));
	};

	nrc.run(command + ' /SERVER:' + server, { 
		onData: dataCallback,
		onDone: doneCallback
	});
}

servers.forEach(function(item){
	setInterval(function() { intervalFunc(item); }, config.execQueryInterval);
});

app.get('/', (req, res) => res.send('RDS-INFO'));

app.get('/info', (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.send(rds_info);
}
);

app.listen(3000, () => util.log('Servidor iniciado na porta ' + port));
