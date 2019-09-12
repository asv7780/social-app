import React from 'react';
import s from './Users.module.css';
import userLogo from '../../assets/images/user-logo.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersApi} from "../../api/api";


const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div>
      {pages.map(p => {
        return <span
          onClick={(event) => {
            props.onPageChanged(p);
          }}
          key={p}
          className={props.currentPage === p ? s.selectedPage : null}>{p}</span>
      })
      }
    </div>
    {
      props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
                 <img src={u.photos.small != null ? u.photos.small : userLogo} alt="user-img" className={s.usersPhoto}/>
              </NavLink>

            </div>
            <div>
              {
                u.followed
                  ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                          onClick={() => {props.follow(u.id)}}>Unfollow</button>
                  : <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {props.unfollow(u.id)}}>Follow</button>
              }
            </div>
          </span>
        <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
              </span>
            <span>
              <div>"u.location.city"</div>
              <div>"u.location.country"</div>
              </span>
          </span>
      </div>)
    }
  </div>
};

export default Users;
