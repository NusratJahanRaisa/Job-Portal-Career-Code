import React, { use } from 'react';
import { AuthContext } from '../Contexts & Providers/AuthContext';

const Hooks = () => {

    const authInfo = use(AuthContext);
    return authInfo
};

export default Hooks;