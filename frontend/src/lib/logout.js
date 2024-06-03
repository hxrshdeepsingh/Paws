"use client"
import Cookies from 'js-cookie';

async function logout() {
    localStorage.removeItem("userInfo")
    localStorage.removeItem("userApi")
    Cookies.remove('pjwt');
    return true;
}

export { logout };