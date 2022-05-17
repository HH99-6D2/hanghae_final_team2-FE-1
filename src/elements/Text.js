import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const { bold, color, size, children, margin, padding, paddingbottom } = props;

  const styles = {
    bold,
    color,
    size,
    margin,
    padding,
    paddingbottom,
  };
  return <ElText {...styles}>{children}</ElText>;
};

Text.defaultProps = {
  children: null,
  padding: '',
  bold: false,
  color: '#222831',
  size: '14px',
  margin: false,
};

const ElText = styled.div`
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  padding-bottom: ${(props) => props.paddingbottom}
`;

export default Text;
