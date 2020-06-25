import React from 'react';

interface IUser {
    name: string;
    email: string;
}

interface IProps {
    user: IUser
}

const User: React.FC<IProps> = ({ user }) => {
    return (
        <div style={{
            display: 'flex',
        }}>
            <p style={{
                flex: 1
            }}>
                <strong>Nome: </strong> {user.name}
            </p>
            <p style={{
                flex: 2
            }}>
                <strong>E-mail: </strong> {user.email}
            </p>
        </div>
    )
}

export default User;