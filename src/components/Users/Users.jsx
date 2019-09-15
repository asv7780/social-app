import React from 'react';
import Paginator from "../common/Paginators/Paginator";
import User from "./User";


const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}
                   pageSize={pageSize}/>
        <div>
            {
                users.map(u => <User key={u.id}
                                     user={u}
                                     followingInProgress={props.followingInProgress}
                                     unfollow={props.unfollow}
                                     follow={props.follow}/>
                )
            }
        </div>

    </div>
};

export default Users;
