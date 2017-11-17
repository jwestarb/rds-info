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

config.servers = ['TS01','TS02','TS03','TS04','TS05','TS06','TS07','TS08','TS09','TS10','TS11','RDS01','RDS02'];
config.command = 'query.exe USER';
config.execQueryInterval = 30000;

module.exports = config;
