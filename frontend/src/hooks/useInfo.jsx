import { useEffect, useState } from 'react';

function useInfo() {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedInfo = localStorage.getItem("userInfo");
            if (storedInfo) {
                setInfo(JSON.parse(storedInfo));
            }
        }
    }, []);

    return info;
}

export default useInfo;
