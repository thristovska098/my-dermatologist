// @flow
import * as React from 'react';

// Hooks
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Utils
import styled from 'styled-components';

// Components
import { Box, Tab, Tabs } from '@mui/material';

export type PageType = {
  title: string,
  path: string,
};

const StyledNavigation: React.ComponentType<*> = styled.div`
  button.MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.css-1h9z7r5-MuiButtonBase-root-MuiTab-root {
    margin-right: 10px;
  }
`;

type Props = {
  pages: Array<string>,
  initialPage: number,
  onChangeFunction?: Function,
  hasValidationErrors?: boolean,
};

const Navigation = ({ pages, initialPage, onChangeFunction, hasValidationErrors }: Props): React.Node => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const history = useHistory();

  const renderTabs = pages.map((page: PageType, index: number): React.Node => (
    <Tab label={page.title} value={index} key={page.title} />
  ));

  const handleOnChange = (event: Object, newValue: string) => {
    if (newValue === currentPage) return;

    if (hasValidationErrors) {
      onChangeFunction();
      return;
    }

    setCurrentPage(newValue);
    onChangeFunction();
    // TODO: Implement the changing of the navigation
    history.push(pages[newValue]?.path);
    // dispatch(push(pages[newValue].path));
  };

  return (
    <StyledNavigation>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderTop: 1, paddingLeft: '30px', borderColor: 'divider' }}>
          <Tabs value={currentPage} onChange={handleOnChange}>
            {renderTabs}
          </Tabs>
        </Box>
      </Box>
    </StyledNavigation>
  );
};

export default Navigation;
