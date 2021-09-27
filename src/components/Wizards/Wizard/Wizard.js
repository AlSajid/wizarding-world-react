import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Wizard = (props) => {
    const { name, ancestry, image } = props.wizard;
    const { wood, core, length } = props.wizard.wand;

    const magic = <FontAwesomeIcon icon={faMagic} />

    return (
        <div className="col-4 ">
            <div className="card my-3 p-3 bg-light shadow-sm" style={{ height: 500 }}>
                <div className="w-50 m-auto rounded-circle overflow-hidden">
                    <img src={image} alt={name} className="card-img-top" ></img>
                </div>

                <p>
                    <p><b>Name:</b> {name}</p>
                    <p><b>Ancestry:</b> {ancestry}</p>
                    <p><b>Wand Wood:</b> {wood}</p>
                    <p><b>Wand Core:</b> {core}</p>
                    <p><b>Wand Length:</b> {length}</p>
                </p>

                <button type="button" onClick={() => props.handleWand(length, name)}
                    className="btn btn-dark">{magic} Add the Wand</button>
            </div>
        </div>
    );
};

export default Wizard;