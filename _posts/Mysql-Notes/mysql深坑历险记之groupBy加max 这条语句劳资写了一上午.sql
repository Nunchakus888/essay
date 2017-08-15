        SELECT
		
	tll.triggerName AS triggerName,
	tll.startTime AS startTime,
	tll.endTime AS endTime,
	IF(tll.status = 2, Now() - tll.startTime, tll.endTime - tll.startTime) as takeTime, 
	tll.startDetail AS startDetail,
	tll.endDetail AS endDetail,
	tll.status AS status,	

        from_unixtime((t.NEXT_FIRE_TIME - 621355968000000000) /10000000) AS nextFireTime,
        from_unixtime((t.PREV_FIRE_TIME - 621355968000000000) /10000000) AS prevFireTime,
        t.TRIGGER_GROUP AS triggerGroup,
        t.DESCRIPTION AS triggerDescription,
        t.PRIORITY AS priority,
        t.TRIGGER_STATE AS triggerState,
        t.TRIGGER_TYPE AS triggerType,
        t.CALENDAR_NAME AS calendarName,
        t.MISFIRE_INSTR AS misfireInstr,
        t.JOB_DATA AS triggerJobData,

        j.JOB_NAME AS jobName,
        j.JOB_GROUP AS jobGroup,
        j.SCHED_NAME AS schedName,
        j.DESCRIPTION AS description,
        j.JOB_CLASS_NAME AS jobClassName,
        j.IS_DURABLE AS isDurable,
        j.IS_NONCONCURRENT AS isNonconcurrent,
        j.IS_UPDATE_DATA AS isUpdateData,
        j.REQUESTS_RECOVERY AS requestsRecovery,
        j.JOB_DATA AS jobData

        FROM
        	(select 
        		tl.*
        		from(
        			select max(tmax.starttime) as starttime, tmax.triggername
        			from TRIGGER_LOG tmax
        			group by tmax.triggerName 
        			order by tmax.starttime desc
        		) a,
        		TRIGGER_LOG tl
        		where a.triggername = tl.triggername 
        		and a.starttime=tl.starttime) 
                tll,
        	QRTZ_TRIGGERS t,
		QRTZ_JOB_DETAILS j
        where

        tll.triggerName = t.TRIGGER_NAME and
        t.JOB_NAME = j.JOB_NAME 
        group by tll.triggerName
        limit 100