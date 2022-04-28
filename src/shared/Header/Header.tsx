import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as A, useLocation } from 'react-router-dom';
import { Container } from '../Container';
import { Logo } from './Logo';
import { Action } from '../Action';
import { EIcon } from '../Icon';
import { checkLight } from '../../store/preferences/selectors';
import { setLight } from '../../store/preferences/actions';
import styles from './header.sass';

export function Header() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const light = useSelector(checkLight);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.container}>
          <Logo />
          <div className={styles.icons}>
            {pathname !== '/preferences'
              && (
                <A to="/preferences">
                  <Action className={styles.link} icon={EIcon.preferences} size={18}>
                    Настройки
                  </Action>
                </A>
              )}
            {pathname !== '/'
              && (
                <A to="/">
                  <Action className={styles.link} icon={EIcon.timer} size={16}>Таймер</Action>
                </A>
              )}
            {pathname !== '/statistics'
              && (
                <A to="statistics">
                  <Action className={styles.link} icon={EIcon.stat} size={16}>Статистика</Action>
                </A>
              )}
            <Action
              onClick={() => dispatch(setLight())}
              className={styles.link}
              icon={EIcon.lamp}
              size={20}
            >
              {light ? 'Выкл.' : 'Вкл.'}
            </Action>
          </div>
        </div>
      </Container>
    </header>
  );
}
