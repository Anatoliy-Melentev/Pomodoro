import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as A } from 'react-router-dom';
import { checkLight } from '../../store/preferences/selectors';
import { setLight } from '../../store/preferences/actions';
import { Container } from '../Container';
import { Logo } from './Logo';
import { Action } from '../Action';
import { EIcon, Icon } from '../Icon';
import { DropDown } from '../DropDown';
import styles from './header.sass';

export function Header() {
  const dispatch = useDispatch();
  const light = useSelector(checkLight);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.container}>
          <A to="/">
            <Logo />
          </A>
          <div className={styles.buttons}>
            <DropDown
              className={styles.dropDown}
              button={(
                <div className={styles.menu}>
                  <Icon name={EIcon.topmenu} size={32} />
                </div>
              )}
            >
              <div className={styles.iconsMobile}>
                <A to="/">
                  <Action className={styles.link} icon={EIcon.timer} size={16}>
                    <span className={styles.actionText}>Таймер</span>
                  </Action>
                </A>
                <A to="/preferences">
                  <Action className={styles.link} icon={EIcon.preferences} size={18}>
                    <span className={styles.actionText}>Настройки</span>
                  </Action>
                </A>
                <A to="statistics">
                  <Action className={styles.link} icon={EIcon.stat} size={16}>
                    <span className={styles.actionText}>Статистика</span>
                  </Action>
                </A>
                <Action
                  onClick={() => dispatch(setLight())}
                  className={styles.link}
                  icon={EIcon.lamp}
                  size={20}
                >
                  <span className={styles.actionText}>{light ? 'Выкл.' : 'Вкл.'}</span>
                </Action>
              </div>
            </DropDown>
            <div className={styles.icons}>
              <A to="/">
                <Action className={styles.link} icon={EIcon.timer} size={16}>
                  <span className={styles.actionText}>Таймер</span>
                </Action>
              </A>
              <A to="/preferences">
                <Action className={styles.link} icon={EIcon.preferences} size={18}>
                  <span className={styles.actionText}>Настройки</span>
                </Action>
              </A>
              <A to="statistics">
                <Action className={styles.link} icon={EIcon.stat} size={16}>
                  <span className={styles.actionText}>Статистика</span>
                </Action>
              </A>
              <Action
                onClick={() => dispatch(setLight())}
                className={styles.link}
                icon={EIcon.lamp}
                size={20}
              >
                <span className={styles.actionText}>{light ? 'Выкл.' : 'Вкл.'}</span>
              </Action>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
