interface i_SchemaBuilder {
  predicates: t_DGraphPredicate[];
  types: i_DGraphtype;
  ToDQL: () => [string, t_error];
  PreciatesToString: () => [string, t_error];
  TypesToString: () => [string, t_error];
  HasType: (name: string) => boolean;
  HasPredicate: (name: string) => boolean;
  Type: (
    name: string,
    ...options: t_TypeBuilderOptionModifier[]
  ) => i_TypeBuilder;
  Predicate: (name: string, scalar: t_DGraphScalar) => i_PredicateBuilder;
}

type t_NewSchema = () => i_SchemaBuilder;
