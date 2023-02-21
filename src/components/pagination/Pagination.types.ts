export type PaginationProps = {
  initialPage?: number;
  totalPages: number;
  onChange?: (page: number) => void;
};
