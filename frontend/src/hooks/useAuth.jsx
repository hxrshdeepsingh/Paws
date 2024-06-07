import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function useAuth(e) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('userInfo');
    if (!e) {
      if (!token) {
        router.push('/login');
      } else {
        setIsAuthenticated(true);
      }
    }
    else {
      if (token) {
        setIsAuthenticated(true);
      }
    }

  }, [router]);

  return isAuthenticated;
}