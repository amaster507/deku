interface i_edge {
  Name: string;
  Filters: i_DQLizer[];
  Pagination: i_Pagination;
  IsRoot: boolean;
  RelativeName: () => string;
  ToDQL: () => t_queryPayload;
  EdgePath: (...abstractPath: string[]) => string;
}
