import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';

function MyLink(props) {
    const location = useLocation();
    if(props.to === location.pathname){
        return <span className={props.className + " " + props.activeClassName}>
          {props.children}
        </span>
    }
    return (
      <NavLink exact activeClassName={props.activeClassName} className={props.className} to={props.to}>
        {props.children}
      </NavLink>
    )
}

export default MyLink;
