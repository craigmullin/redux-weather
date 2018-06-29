import _ from 'lodash';
import React from 'react';
import Trend from 'react-trend';
// this is a functional component, not a container

function average(data){
    return _.round(_.sum(data)/data.length);
}



export default (props) => {
    return (
        <div>
            <Trend height={120} width={180} stroke={props.color} strokeWidth="2px" data={props.data}></Trend>
            <div>Average / Week: {average(props.data)} {props.units}</div>
        </div>
    );
}