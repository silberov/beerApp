// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Wraper } from './styles';
type Props = {
  
};
export function Nav(props: Props) {
  return (
    <Wraper>
        <ul>
            <li><Link to="/" /></li>
            <li><Link to="/recipe/:id" /></li>
        </ul>
      
    </Wraper>
  );
};