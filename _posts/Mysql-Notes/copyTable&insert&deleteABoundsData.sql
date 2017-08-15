CREATE TABLE t_log_backup3 AS SELECT * FROM  t_log_backup2; #copy table & data
CREATE TABLE IF NOT EXISTS t_log_history LIKE t_log #copy table but no data

INSERT INTO t_log_backup4 VALUES(),(),(),(),() #INSERT bounds data

delete from t_log_backup3 where 1=1 and LOGID IN ()
delete from t_log_backup3 where 1=1 and LOGID = '123' OR LOGID = '232' OR LOGID = '323'   
