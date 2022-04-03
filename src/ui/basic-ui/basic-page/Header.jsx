// @flow
import * as React from 'react';

// Components
import { StyledLogo } from './styles';
import Navigation from '../../common/navigation/Navigation';

// Types
import type { PageType } from '../../common/navigation/Navigation';

type Props = {
  pages?: Array<PageType>,
  initialPage?: number,
};

const Header = ({ pages, initialPage = 0 }: Props): React.Node => (
  <>
    <StyledLogo />
    {pages && <Navigation pages={pages} initialPage={initialPage} />}
  </>
);

export default Header;
