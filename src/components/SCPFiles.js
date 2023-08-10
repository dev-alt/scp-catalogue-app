import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../assets/scpData.json';

function SCPFiles() {
    const { scpId } = useParams();
    const scp = Data.find(item => item.number === scpId);

    return (
        <div>
            <h3>{scp.number}</h3>
            <h4>Object Class: {scp.objectClass}</h4>
            {/* <h4>Tags:</h4>
            {/* <ul style={{ listStyle: 'none', padding: 0 }}>
                {scp.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul> */}
            <h4>special Containment Procedures:</h4>
                {scp.specialContainmentProcedures.map((Procedures) => (
                    <p key={Procedures}>{Procedures}</p>
                ))}


            <h4>Description:</h4>           
                {scp.description.map((desc) => (
                    <p key={desc}>{desc}</p>
                ))}

            <h4>Reference:</h4>
            {scp.reference.map((ref, index) => (
                <p key={index}>{ref}</p>
            ))}
        </div>
    );
}

export default SCPFiles;
