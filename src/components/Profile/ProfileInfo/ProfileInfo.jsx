import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>;
  }
    return (
        <div>
            <div className={s.descriptionBlock}>
              <img src={props.profile.photos.small} alt="profile-img"/>
              <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
              {/*<div>*/}
              {/* <div>*/}
              {/*   <h4>About</h4>*/}
              {/*   <p>{props.profile.aboutMe}</p>*/}
              {/* </div>*/}
              {/*  <div>*/}
              {/*    <h4>Contacts</h4>*/}
              {/*    <ul>*/}
              {/*      <li><a href="#d">facebook</a></li>*/}
              {/*      <li><a href="#d">vk</a></li>*/}
              {/*      <li><a href="#d">twitter</a></li>*/}
              {/*      <li><a href="#d">instagram</a></li>*/}
              {/*        <li><a href="#d">github</a></li>*/}
              {/*    </ul>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
        </div>
    );
};

export default ProfileInfo;
