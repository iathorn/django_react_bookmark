import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Footer = () => (
  <div className={cx('footer')}>
    <div className={cx('footer-content')}>
      <Link to="/" className={cx('brand-logo')}>
        Djangish Bookmarks
      </Link>
    </div>
  </div>
);

export default Footer;