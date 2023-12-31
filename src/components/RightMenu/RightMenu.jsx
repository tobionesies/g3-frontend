import React, { useContext } from 'react';
import * as s from './style';

const RightMenu = () => {

  const handleMenuItemClick = (category) => {
 
  };

  return (
    <s.Container>
      <s.RightMenuDiv>
        {/* Content for LeftMenuDiv */}
        <s.RightMenuItem onClick={() => handleMenuItemClick('')}>
          <h3>Categorys</h3>
        </s.RightMenuItem>
        <s.RightMenuItem onClick={() => handleMenuItemClick('Music')}>Music</s.RightMenuItem>
        <s.RightMenuItem onClick={() => handleMenuItemClick('Self improvement')}>
          Self improvement
        </s.RightMenuItem>
        <s.RightMenuItem onClick={() => handleMenuItemClick('Animals')}>Animals</s.RightMenuItem>
        <s.RightMenuItem onClick={() => handleMenuItemClick('Sport')}>Sport</s.RightMenuItem>
        <s.RightMenuItem onClick={() => handleMenuItemClick('Humor')}>Humor</s.RightMenuItem>
        <s.RightMenuItem onClick={() => handleMenuItemClick('Show all')}>Show all</s.RightMenuItem>
        <s.RightMenuItem>
          Current filter: 
        </s.RightMenuItem>
      </s.RightMenuDiv>
    </s.Container>
  );
};

export default RightMenu;
