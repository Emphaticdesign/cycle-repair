import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faDirections, faHammer, faTools } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        title: 'Diagnostics',
        description: 'We are The best for service',
        icon: faDirections
    },

    {
        title: 'Maintenance',
        description: 'We are The best for service',
        icon: faHammer
    },

    {
        title: 'Services',
        description: 'We are The best for service',
        icon: faTools
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center mt-3">
            <div className="w-75 row">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;