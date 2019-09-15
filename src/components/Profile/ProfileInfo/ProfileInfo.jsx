import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userLogo from "../../../assets/images/user-logo.png";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader/>;
  }
    return (
        <div>
            <div className={s.descriptionBlock}>
              <img className={s.profileImg} src={profile.photos.small!= null ? profile.photos.small : userLogo} alt="profile-img"/>
              <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;
