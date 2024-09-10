import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

interface RequireAuthProps {
    children: JSX.Element;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("RequireAuth must be used within an AuthProvider");
    }

    return children;
};

export default RequireAuth;
