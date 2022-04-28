import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import styles from './dropdown.sass';
import { getElementOffset } from '../../utils/js/getElementOffset';
import { setElementOffset } from '../../utils/js/setElementOffset';
import { emptyFn } from '../../utils/js/emptyFn';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function DropDown({
  button, children, isOpen, onOpen, onClose, className,
}: IDropdownProps) {
  const classes = classNames(styles.listContainer, className);
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  const [offset, setOffset] = useState<[number, number]>([0, 0]);
  const refMenu = useRef<HTMLDivElement>(null);
  const refBtn = useRef<HTMLButtonElement>(null);

  const node = document.querySelector('#dropdown-root');
  if (!node) return null;

  useEffect(() => setElementOffset(refMenu, offset), [offset]);
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => {
    if (isDropdownOpen && onOpen) {
      onOpen();
    } else if (onClose) {
      onClose();
    }
  }, [isDropdownOpen]);

  const handleOpen = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
    if (currentTarget) {
      setOffset(getElementOffset(currentTarget));
    }

    if (!isOpen) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    function handleClick({ target }: MouseEvent) {
      if (
        target instanceof Node
        && !refMenu.current?.contains(target)
        && !refBtn.current?.contains(target)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.btn}
        ref={refBtn}
        onClick={handleOpen}
      >
        {button}
      </button>
      {isDropdownOpen && ReactDOM.createPortal(
        (
          <div ref={refMenu} className={classes}>
            <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
              {children}
            </div>
          </div>
        ),
        node,
      )}
    </div>
  );
}

DropDown.defaultProps = {
  onOpen: emptyFn,
  onClose: emptyFn,
  isOpen: false,
  className: '',
};
