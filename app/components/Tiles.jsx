import React from "react";
import { Panel, Badge } from "react-bootstrap";

const Tiles = ({ amount, title }) => (
    
  <div>
    <Panel>
      <Panel.Body>{ title.toUpperCase() }: <Badge pullRight>{ amount }</Badge></Panel.Body>
    </Panel>
  </div>
);

export default Tiles;