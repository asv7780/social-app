import React from 'react';
import s from './Users.module.css';
import userLogo from '../../assets/images/user-logo.png'
import {NavLink} from "react-router-dom";


const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div>
          <span>
            <div>
              <NavLink to={'/profile/' + user.id}>
                 <img src={user.photos.small != null ? user.photos.small : userLogo} alt="user-img" className={s.usersPhoto}/>
              </NavLink>

            </div>
            <div>
              {
                  user.followed
                      ? <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    unfollow(user.id)
                                }}>Unfollow</button>
                      : <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    follow(user.id)
                                }}>Follow</button>
              }
            </div>
          </span>
            <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
              </span>
            <span>
              <div>"u.location.city"</div>
              <div>"u.location.country"</div>
              </span>
          </span>
        </div>
    )
};

export default User;
