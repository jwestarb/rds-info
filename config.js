var config = {};

config.svc = {};
config.web = {};

config.svc.exec_domain = process.env.RDS_INFO_EXEC_DOMAIN || 'your_domain';
config.svc.exec_account =  process.env.RDS_INFO_EXEC_ACCOUNT || 'Administrator';
config.svc.exec_password =  process.env.RDS_INFO_EXEC_PASSWORD || 'password';
config.svc.logOnAs_domain = process.env.RDS_INFO_SVC_DOMAIN || 'your_domain';
config.svc.logOnAs_account = process.env.RDS_INFO_SVC_ACCOUNT || 'rds-info';
config.svc.logOnAs_password = process.env.RDS_INFO_SVC_PASSWORD || 'password';

config.web.port = process.env.RDS_INFO_WEB_PORT || 3000;

config.servers = ['TS21','TS22','TS23','TS24','TS25','TS26','TS27','TS28','TS29','TS30','TS31','TS32','TSEXT33'];
config.command = 'query.exe USER';
config.execQueryInterval = 30000;

module.exports = config;
