'use-client';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { IconButton, Input, Stack, Text } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { PaginationProps } from './Pagination.types';

const Pagination = (props: PaginationProps) => {
  const { initialPage, totalPages, onChange } = props;

  const [page, setPage] = useState(initialPage ?? 1);

  const onPageChange = (newPage: number) => {
    setPage(newPage);
    if (onChange) {
      onChange(newPage);
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPage = parseInt(e.target.value, 10);
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      if (onChange) {
        onChange(newPage);
      }
    }
  };

  return (
    <Stack direction="row" gap="1rem">
      <IconButton
        aria-label="previous-page"
        icon={<ChevronLeftIcon />}
        isDisabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      />
      <Stack direction="row" alignItems="center" gap="1rem">
        <Text>Page:</Text>
        <Input value={page} onChange={onInputChange} width={100} textAlign="center" />
        <Text>of {totalPages}</Text>
      </Stack>
      <IconButton
        aria-label="next-page"
        icon={<ChevronRightIcon />}
        isDisabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      />
    </Stack>
  );
};

export default Pagination;
