import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = props => {
    return (
        <div>
            <div className={s.profile}><img
                src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"
                alt="BG-content"/></div>
            <div className={s.descriptionBlock}>ava + descr</div>
        </div>
    );
};

export default ProfileInfo;
