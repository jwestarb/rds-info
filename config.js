var config = {};

config.svc = {};
config.web = {};

config.svc.exec_domain = process.env.RDS_INFO_EXEC_DOMAIN || 'acsc-sul.local';
config.svc.exec_account =  process.env.RDS_INFO_EXEC_ACCOUNT || 'rds-info';
config.svc.exec_password =  process.env.RDS_INFO_EXEC_PASSWORD || 'rds@2017#';
config.svc.logOnAs_domain = process.env.RDS_INFO_SVC_DOMAIN || 'acsc-sul.local';
config.svc.logOnAs_account = process.env.RDS_INFO_SVC_ACCOUNT || 'rds-info';
config.svc.logOnAs_password = process.env.RDS_INFO_SVC_PASSWORD || 'rds@2017#';

config.web.port = process.env.RDS_INFO_WEB_PORT || 3000;

config.servers = ['TS01','TS02','TS03','TS04','TS05','TS06','TS07','TS08','TS09','TS10','TS11','RDS01','RDS02'];
config.command = 'query.exe USER';
config.execQueryInterval = 30000;

module.exports = config;
