import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    return (
        <div>
            {/*<div className={s.profile}><img*/}
            {/*    src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"*/}
            {/*    alt="BG-content"/></div>*/}
            <div className={s.descriptionBlock}>
              <img src={props.profile.photos.small} alt="profile-img"/>
              <div>
                <ProfileStatus status={"hello my friends"}/>
               <div>
                 <h4>About</h4>
                 <p>{props.profile.aboutMe}</p>
               </div>
                <div>
                  <h4>Contacts</h4>
                  <ul>
                    <li><a href="#d">facebook</a></li>
                    <li><a href="#d">vk</a></li>
                    <li><a href="#d">twitter</a></li>
                    <li><a href="#d">instagram</a></li>
                      <li><a href="#d">github</a></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
