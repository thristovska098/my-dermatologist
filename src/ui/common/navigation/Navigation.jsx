// @flow
import * as React from 'react';

// Utils
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Components
import { Box, Tab, Tabs } from '@mui/material';

export type PageType = {
  title: string,
  path: string,
};

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

  const handleOnChange = (event, newValue) => {
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
