interface i_DGraphtype {
  Name: string;
  predicates: t_DGraphPredicate[];
  ToString: () => [string, t_error];
  PredicatesToString: () => string;
}

interface i_TypeBuilder extends i_DGraphtype {
  prefixFields: boolean;
  schema: i_SchemaBuilder;
  String: (name: string) => i_PredicateStringBuilder;
  DateTime: (name: string) => i_PredicateDateBuilder;
  Type: (kind: string, name: string) => i_PredicateBuilder;
  UID: (name: string) => i_PredicateBuilder;
  Int: (name: string) => i_PredicateBuilder;
  Float: (name: string) => i_PredicateBuilder;
  Bool: (name: string) => i_PredicateBuilder;
  Geo: (name: string) => i_PredicateBuilder;
  Password: (name: string) => i_PredicateBuilder;
  field: (name: string, scalar: t_DGraphScalar) => i_PredicateBuilder;
  HasPredicate: (name: string) => boolean;
  normalizeName: (name: string) => string;
  registerPredicate: (predicate: t_DGraphPredicate) => void;
}

type t_TypeBuilderOptionModifier = (TypeBuilder) => void;

type t_WithTypePrefix = (usePrefix: boolean) => t_TypeBuilderOptionModifier;

type t_NewTypeBuilder = (
  name: string,
  ...options: t_TypeBuilderOptionModifier[]
) => i_TypeBuilder;
