select count(*) from t_log where DATE_FORMAT(CREATETIME, "%m-%Y") = "10-2016"  #10月log记录3581911
select count(*) from t_log where DATE_FORMAT(CREATETIME, "%m-%Y") = "9-2016"  #9月log记录0

select count(*) from t_log WHERE WEEK(CURDATE())=WEEK(CREATETIME) 					  #  本周4141
select count(*) from t_log WHERE WEEK(CURDATE() - interval 7 day)=WEEK(CREATETIME) #  上周1498904
select count(*) from t_log WHERE WEEK(CURDATE() - interval 14 day)=WEEK(CREATETIME)#上上周2078866

select 2078866 + 1498904 + 4141

select WEEK(CREATETIME) weeks from t_log group by weeks