import React from 'react';
import Profile from "./components/Profile.jsx";
import Avatar from "./components/Avatar.jsx";

const AppProfile = () => {
    return (
        <div>
            <Avatar url={'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'} isNew={true}/>
            <Profile image={'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'}
                     name={'James Kim'}
                     title={'Front-end Developer'}
                     isNew={true}
            />
            <Profile image={'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'}
                     name={'Daniel Na'}
                     title={'Back-end Developer'}
            />
        </div>
    );
};

export default AppProfile;