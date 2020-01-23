import './toggle-switch.scss';
import React from 'react';
import { Icon } from '@iconify/react';
import toggleSwitch from '@iconify/icons-mdi/toggle-switch';
import toggleSwitchOff from '@iconify/icons-mdi/toggle-switch-off';

export default ({enabled, onClick, text}) => (
  <span className='toggle-switch'>
    <Icon
      icon={enabled ? toggleSwitch : toggleSwitchOff}
      height={50}
      onClick={onClick}
    />
    <span className='icon-title'>{text}</span>
  </span>);