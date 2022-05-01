import React, {useContext, useEffect, useState} from 'react';
import classNames from 'classnames';
import { bounceIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { emptyFn } from '../../../utils/js/emptyFn';
import { Plus } from '../../Plus';
import styles from './timestring.sass';
import {taskContext} from "../../context/taskContext";

interface ITimeStringProps {
  countTime: number;
  color?: string;
  addTime?: () => void;
}

const style = StyleSheet.create({
  came: {
    animationName: bounceIn,
    animationDuration: '500ms',
  },
});

export function TimeString({ countTime, color = 'grey', addTime = emptyFn }: ITimeStringProps) {
  const {
    oneCls, setOneCls, twoCls, setTwoCls, threeCls, setThreeCls, fourCls, setFourCls,
  } = useContext(taskContext);
  const minuts = Math.trunc((countTime / 60) % 60);
  const seconds = countTime % 60;
  const one = Math.trunc(minuts / 10);
  const two = minuts % 10;
  const three = Math.trunc(seconds / 10);
  const four = seconds % 10;
  const runAnimation = (fn: (value: boolean) => void) => {
    fn(true);
    const fi = setTimeout(() => {
      fn(false);
      clearTimeout(fi);
    }, 500);
  };

  useEffect(() => setOneCls && runAnimation(setOneCls), [one]);
  useEffect(() => setTwoCls && runAnimation(setTwoCls), [two]);
  useEffect(() => setThreeCls && runAnimation(setThreeCls), [three]);
  useEffect(() => setFourCls && runAnimation(setFourCls), [four]);

  useEffect(() => {
    if ([one, two, three, four].every((item) => +item === 0)) {
      [setOneCls, setTwoCls, setThreeCls, setFourCls].forEach((fn) => fn && runAnimation(fn));
    }
  }, [one, two, three, four]);

  return (
    <div className={styles.time}>
      <div className={styles.wrp}>
        <span className={styles[color]}>
          <div className={classNames({ [css(style.came)]: oneCls })}>{one}</div>
          <div className={classNames({ [css(style.came)]: twoCls })}>{two}</div>
          <div className={styles.dots}>:</div>
          <div className={classNames({ [css(style.came)]: threeCls })}>{three}</div>
          <div className={classNames({ [css(style.came)]: fourCls })}>{four}</div>
        </span>
      </div>
      <Plus onClick={addTime} />
    </div>
  );
}
TimeString.defaultProps = {
  addTime: emptyFn,
  color: 'grey',
};
