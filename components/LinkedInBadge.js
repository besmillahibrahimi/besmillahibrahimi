import React, { useEffect } from 'react';

const LinkedInBadge = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;
        script.defer = true;
        script.type = 'text/javascript';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="besmillahibrahimi" data-version="v1">
            <a className="badge-base__link LI-simple-link" href="https://ir.linkedin.com/in/besmillahibrahimi?trk=profile-badge">
            </a>
        </div>
    );
};

export default LinkedInBadge;
