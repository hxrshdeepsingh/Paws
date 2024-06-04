'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressProvider = ({ children }) => {
    return (
        <>
            {children}
            <ProgressBar
                height="3px"
                color="#2563EB"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
};

export default ProgressProvider;