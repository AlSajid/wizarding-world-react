import React, { useEffect, useState } from 'react';
import Wizard from './Wizard/Wizard';
import Cart from './../Cart/Cart';

const Wizards = () => {
    const [wizards, setWizards] = useState([]);
    const [wave, setWave] = useState(0);
    const [wandLength, setWandLength] = useState(0);
    const [wandOwner, setWandOwner] = useState([]);

    function handleWand (newlength, newWandOwner) {
        setWave(wave+1);
        setWandLength(wandLength + parseFloat(newlength));
        const wandOwners = [...wandOwner, newWandOwner];
        setWandOwner(wandOwners);
    }

    useEffect(() => {
        fetch('./wizards.json')
            .then(result => result.json())
            .then(data => setWizards(data));
    }, []);

    return (
        <div className="row">
            <div className="col-9 row">
                {
                    wizards.map(wizard => <Wizard
                        key={wizard.name}
                        wizard={wizard}
                        handleWand={handleWand}></Wizard>
                    )
                }
               
            </div>
            <Cart wave={wave} wandLength={wandLength} waveOwners={wandOwner}></Cart>

        </div>

    );
};

export default Wizards;