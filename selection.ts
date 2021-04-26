interface i_selectionSet {
  Fields: string[];
  Parent: i_edge;
  Edges: t_QueryBuilder[];
  ToDQL: () => t_queryPayload;
}

type t_Fields = (fields: string) => string[];
