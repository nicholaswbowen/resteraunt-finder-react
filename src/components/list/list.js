import './list.scss';
import * as React from 'react';
import ListItem from './list-item';
import { connect } from 'react-redux';
import useWindowDimensions from '../../util/useWindowDimensions';
function List({ resteraunts = [], className, isMobile }){
    const { height } = useWindowDimensions(); // This hook is asbsurdly useful.
    const adjustedHeight = height-110; // 110 is the height of the navbar.
    return (
        <div className={className} style={{height: adjustedHeight}}>
            {resteraunts.map((resteraunt) => <ListItem resteraunt={resteraunt} key={resteraunt.id} isMobile={isMobile}/>)}
        </div>
    )
}

function mapStateToProps({ resteraunts: { data } }){
    return {
        resteraunts: data
    }
}

export default connect(mapStateToProps)(List);