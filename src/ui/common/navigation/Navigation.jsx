// @flow
import * as React from 'react';

// Utils
import { useState } from 'react';

// Components
import { Box, Tab, Tabs } from '@mui/material';

export type PageType = {
  title: string,
  path: string,
};

type Props = {
  pages: Array<string>,
};

const Navigation = ({ pages }: Props): React.Node => {
  const [currentPage, setCurrentPage] = useState(0);

  const renderTabs = pages.map((page: PageType, index: number): React.Node => (
    <Tab label={page.title} value={index} key={page.title} />
  ));

  const handleOnChange = (event, newValue) => {
    if (newValue === currentPage) return;

    setCurrentPage(newValue);
    // TODO: Implement the changing of the navigation
    // dispatch(push(pages[newValue].path));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderTop: 1, paddingLeft: '30px', borderColor: 'divider' }}>
        <Tabs value={currentPage} onChange={handleOnChange}>
          {renderTabs}
        </Tabs>
      </Box>
    </Box>
  );
};

export default Navigation;
