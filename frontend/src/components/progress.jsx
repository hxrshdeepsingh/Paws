'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressProvider = ({ children }) => {
    return (
        <>
            {children}
            <ProgressBar
                height="4px"
                color="#56e0ff"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
};

export default ProgressProvider;