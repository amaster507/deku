interface t_queryGrammar {
  RootEdge: i_edge;
  Selection: i_selectionSet;
  Filters: i_DQLizer[];
  Variables: t_QueryBuilder[];
  Name: () => string;
  ToDQL: () => t_queryPayload;
  addEdge: (writer: t_writer, args: t_args) => t_error;
  addFilters: (writer: t_writer, args: t_args) => t_error;
  addSelection: (writer: t_writer, args: t_args) => t_error;
}

type t_addPart = (part: i_DQLizer, writer: t_writer, args: t_args) => t_error;
