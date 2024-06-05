'use client';

import axios from 'axios';
import Cookies from 'js-cookie';

async function postRequest(url, data) {
  const cookie = Cookies.get('pjwt');
  try {
    const res = await axios.post(url, data, {
      headers: {
        Authorization: `${cookie}`,
      },
      withCredentials: true,
    });
    return res;
  } catch (error) {
    console.log('Error in postRequest:', error);
    throw error;
  }
}

async function deleteRequest(url) {
  const cookie = Cookies.get('pjwt');
  try {
    const res = await axios.delete(url, {
      headers: {
        Authorization: `${cookie}`,
      },
      withCredentials: true,
    });
    return res;
  } catch (error) {
    console.log('Error in postRequest:', error);
    throw error;
  }
}

async function putRequest(url, data) {
  const cookie = Cookies.get('pjwt');
  const updatedData = {
    data,
  };
  try {
    const res = await axios.put(url, updatedData, {
      headers: {
        Authorization: `${cookie}`,
      },
      withCredentials: true,
    });
    return res;
  } catch (error) {
    console.log('Error in putRequest:', error);
    throw error;
  }
}

async function getRequest(url) {
  const cookie = Cookies.get('pjwt');
  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `${cookie}`,
      },
      withCredentials: true,
    });
    return res;
  } catch (error) {
    console.log('Error in getRequest:', error);
    throw error;
  }
}

export { postRequest, getRequest, putRequest, deleteRequest };
