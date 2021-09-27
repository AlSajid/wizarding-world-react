import React from 'react';
import List from './List/List';

const Cart = (props) => {


    return (
        <div className="col-3 pt-3">
            <div className="border border-dark px-1 py-3" >
                <p className="text-center"><b>Total Wave Count:</b> <span className="fs-5">{props.wave}</span></p>
                <p className="text-center"><b>Total Wands length:</b> <span className="fs-5">{props.wandLength}</span></p>
                {
                    props.waveOwners.map(waveOwner => <List waveOwner={waveOwner}></List>)

                }
            </div>
        </div>
    );
};

export default Cart;