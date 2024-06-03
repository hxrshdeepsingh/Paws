// src/hooks/useLinks.js
import { useMemo } from 'react';

const useLinks = () => {
    return useMemo(() => ({
        HOME: '/',
        POSTS: '/posts',
        DASHBOARD: '/dashboard',
    }), []);
};

export default useLinks;
