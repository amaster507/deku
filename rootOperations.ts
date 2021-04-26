interface i_rootOperation {
  operations: t_queryGrammar[];
  BatchQuery: (...queries: t_QueryBuilder[]) => t_queryPayload;
  ToQuery: () => [query: string, variables: t_variables, err: t_error];
  // private goTypeToDQLType: (value: any) => string
  replacePlaceHolders: (
    query: string,
    args: t_args
  ) => [string, t_args, t_error];
  isListType: (val: any) => boolean;
}
