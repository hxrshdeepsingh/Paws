'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressProvider = ({ children }) => {
    return (
        <>
            {children}
            <ProgressBar
                height="6px"
                color="#DDE331"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
};

export default ProgressProvider;