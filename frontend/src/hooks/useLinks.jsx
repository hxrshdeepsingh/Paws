// src/hooks/useLinks.js
import { useMemo } from 'react';

const useLinks = () => {
    return useMemo(() => ({
        HOME: '/',
        EXPLORE: '/explore',
        ABOUT: '/#about',
        CONTACT: '/#contact',
        DASHBOARD: '/dashboard',
        POST_CREATE: '/dashboard/create',
        POST_MANAGE: '/dashboard/edit',
    }), []);
};

export default useLinks;
