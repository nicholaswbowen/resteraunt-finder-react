import './toggle-switch.scss';
import React from 'react';
import { InlineIcon } from '@iconify/react';
import toggleSwitch from '@iconify/icons-mdi/toggle-switch';
import toggleSwitchOff from '@iconify/icons-mdi/toggle-switch-off';

export default ({enabled, onClick, text}) => (
  <span className='toggle-switch'>
    <InlineIcon
      icon={enabled ? toggleSwitch : toggleSwitchOff}
      height={50}
      onClick={onClick}
      align="middle"
    />
      {text}
  </span>);