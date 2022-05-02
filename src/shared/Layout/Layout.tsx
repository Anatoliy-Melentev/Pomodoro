import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { checkLight } from '../../store/preferences/selectors';
import styles from './layout.sass';

interface ILayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  const light = useSelector(checkLight);

  useEffect(() => { document.body.dataset.theme = light ? 'on' : 'off'; }, [light]);

  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
