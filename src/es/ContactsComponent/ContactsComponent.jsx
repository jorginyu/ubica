import React from 'react';

const contacts = [
    { name: 'Spiderman', lat: 41.529616, lng: 2.434130 },
    { name: 'Iron Man', lat: 41.528103, lng: 2.433834 },
    { name: 'Hulk', lat: 41.530192, lng: 2.422994 }
];

const MarkersC = ({ text }) => <div className="contact">{text}</div>;

export default  () => {
    return contacts.map((contact, i) => {
        <MarkersC lat={contact.lat} lng={contact.lng} text={contact.name} key={i} />
    })
}