// @flow
import * as React from 'react';

// Components
import { StyledLogo } from './styles';
import Navigation from '../../common/navigation/Navigation';

// Types
import type { PageType } from '../../common/navigation/Navigation';

type Props = {
  pages?: Array<PageType>,
};

const Header = ({ pages }: Props): React.Node => (
  <>
    <StyledLogo />
    {pages && <Navigation pages={pages} />}
  </>
);

export default Header;
