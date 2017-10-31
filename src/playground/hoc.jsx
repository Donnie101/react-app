import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>this is info: {props.info}</p>
        </div>
    )
}

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info please don't share</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthenticaiton = (WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated?<WrappedComponent {...props}/>:<p>YOU GOTTA BE AUTHENTICATED</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthenticaiton(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="Lorem ipsum dolor sit amet " />, document.getElementById('app'))