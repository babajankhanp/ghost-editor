/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import styled from 'styled-components';

import {
  colors
} from '@/constants';

const settingWrapper = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid ${colors.borderColor};
  display: none;
`;
const settingTitle = styled.div`
  color: ${colors.textPrimary};
  font-weight: 500;
  padding-bottom: 10px;
`;

export {
  settingWrapper,
  settingTitle
};
