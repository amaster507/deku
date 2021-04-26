interface t_QueryBuilder {
  rootEdge?: i_edge;
  selection?: i_selectionSet;
  edges?: Record<string, t_QueryBuilder[]>;
  filters?: i_DQLizer[];
  variables?: t_QueryBuilder[];
  Query: (name: string, rootQueryFun: t_FilterFn) => t_QueryBuilder;
  ToDQL: () => any;
  toDQL: () => t_queryPayload;
  toGrammar: () => t_queryGrammar;
  Variable: (t_QueryBuilder: t_QueryBuilder) => t_QueryBuilder;
  Fields: (...fields: string[]) => t_QueryBuilder;
  Filter: (...filters: i_DQLizer[]) => t_QueryBuilder;
  Paginate: (pagination: i_Pagination) => t_QueryBuilder;
  Edge: (
    fullPath: string,
    fields: string[],
    ...filters: i_DQLizer[]
  ) => t_QueryBuilder;
  EdgeFn: (
    fullPath: string,
    fn: (builder: t_QueryBuilder) => t_QueryBuilder
  ) => t_QueryBuilder;
}
