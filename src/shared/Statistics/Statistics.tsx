import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Menu } from './Menu';
import { Day } from './Day';
import { Week } from './Week';
import { Card } from './Card';
import { getDay } from '../../utils/js/getDay';
import { getCurSeconds } from '../../utils/js/getCurSeconds';
import { selectStatistics } from '../../store/statistics/selectors';
import styles from './statistics.sass';

export function Statistics() {
  const curDayId = getDay(getCurSeconds());
  const weekDay = new Date().getDay();
  const rusWeek = weekDay ? weekDay - 1 : 6;
  const [active, setActive] = useState(0);
  const [weekCount, setWeekCount] = useState(0);
  const startWeekId = curDayId + 1 - (weekDay || 7) - (weekCount * 7);
  const weekStat = Array(7).fill(null)
    .map((_, i) => useSelector(selectStatistics(startWeekId + i)));
  const {
    tomato, tomatoDT, totalDT, pauseDT, stopTimes,
  } = weekStat[active];

  useEffect(() => setActive(!weekCount ? rusWeek : 0), [weekCount]);

  return (
    <div className={styles.statistics}>
      <Menu setWeekCount={(week) => setWeekCount(week)} />
      <Day active={active} tomato={tomato} tomatoDT={Math.round(tomatoDT / 60)} />
      <Week active={active} setActive={setActive} total={weekStat.map((day) => day.totalDT / 60)} />
      <Card type="focus" value={Math.round((tomatoDT / (totalDT || 1)) * 100)} />
      <Card type="pause" value={Math.round(pauseDT / 60)} />
      <Card type="stop" value={stopTimes} />
    </div>
  );
}
