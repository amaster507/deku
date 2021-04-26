interface i_QueryVariable extends t_QueryBuilder {
  As: (name: string) => i_QueryVariable;
  ToDQL: () => t_queryPayload;
}

type t_Variable = (rootQueryFn: t_FilterFn) => i_QueryVariable;
