import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import PropTypes from 'prop-types';

const BoxTile=(props)=>{
    return(
        <>
            <span>{props.name} <span class="badge">{props.value}</span></span>
        </>
    );
  }

  BoxTile.prototype = {
    name : PropTypes.string.isRequired,
    value : PropTypes.number.isRequired
  }



  export default BoxTile;
