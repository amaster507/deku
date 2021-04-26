type t_eqOperator = "eq";
type t_geOperator = "ge";
type t_gtOperator = "gt";
type t_leOperator = "le";
type t_ltOperator = "lt";
type t_hasOperator = "has";
type t_alloftermsOperator = "allofterms";
type t_anyoftermsOperator = "anyofterms";
type t_regexpOperator = "regexp";
type t_matchOperator = "match";
type t_alloftextOperator = "alloftext";
type t_anyoftextOperator = "anyoftext";
type t_countOperator = "count";
type t_exactOperator = "exact";
type t_termOperator = "term";
type t_fulltextOperator = "fulltext";
type t_valOperator = "val";
type t_sumOperator = "sum";
type t_betweenOperator = "between";
type t_uidOperator = "uid";
type t_uidInOperator = "uid_in";

type t_QueryFn =
  | t_eqOperator
  | t_geOperator
  | t_gtOperator
  | t_leOperator
  | t_ltOperator
  | t_hasOperator
  | t_alloftermsOperator
  | t_anyoftermsOperator
  | t_regexpOperator
  | t_matchOperator
  | t_alloftextOperator
  | t_anyoftextOperator
  | t_countOperator
  | t_exactOperator
  | t_termOperator
  | t_fulltextOperator
  | t_valOperator
  | t_sumOperator
  | t_betweenOperator
  | t_uidOperator
  | t_uidInOperator;

type t_FilterFn = () => i_DQLizer;

interface i_QueryFunction {
  operator: t_QueryFn;
  field: string;
  value: t_value;
  ToDQL: () => t_queryPayload;
}

interface i_connector extends i_DQLizer {
  join: (separator: string) => t_queryPayload;
}

interface i_Or extends i_connector {
  ToDQL: () => t_queryPayload;
}

interface i_And extends i_connector {
  ToDQL: () => t_queryPayload;
}

interface i_mapExpression {
  [str: string]: any;
  toDQL: (operator: t_QueryFn) => t_queryPayload;
}

interface i_Eq extends i_mapExpression {
  ToDQL: () => t_queryPayload;
}

type t_EqFn = (field: string, value: t_value) => t_FilterFn;

interface i_Le extends i_mapExpression {
  ToDQL: () => t_queryPayload;
}

type t_LeFn = (field: string, value: t_value) => t_FilterFn;

interface i_Lt extends i_mapExpression {
  ToDQL: () => t_queryPayload;
}

type t_LtFn = (field: string, value: t_value) => t_FilterFn;

interface i_Ge extends i_mapExpression {
  ToDQL: () => t_queryPayload;
}

type t_GeFn = (field: string, value: t_value) => t_FilterFn;

interface i_Gt extends i_mapExpression {
  ToDQL: () => t_queryPayload;
}

type t_GtFn = (field: string, value: t_value) => t_FilterFn;

interface i_Has extends i_mapExpression {
  ToDQL: () => t_queryPayload;
}

type t_HasFn = (field: string, value: t_value) => t_FilterFn;

interface i_AllOfTerms extends i_mapExpression {
  ToDQL: () => t_queryPayload;
}

type t_AllOfTermsFn = (field: string, value: t_value) => t_FilterFn;

interface i_AnyOfTerms extends i_mapExpression {
  ToDQL: () => t_queryPayload;
}

type t_AnyOfTermsFn = (field: string, value: t_value) => t_FilterFn;

interface i_Regexp extends i_mapExpression {
  ToDQL: () => t_queryPayload;
}

type t_RegexpFn = (field: string, value: t_value) => t_FilterFn;

interface i_Match extends i_mapExpression {
  ToDQL: () => t_queryPayload;
}

type t_MatchFn = (field: string, value: t_value) => t_FilterFn;

interface i_Pagination {
  First: number;
  Offset: number;
  After: string;
  WantsPagination: () => boolean;
  ToDQL: () => t_queryPayload;
}

type t_varRef = string;

type t_Var = (ref: string) => t_varRef;

type t_getSortedVariables = (exp: t_exp) => string[];

type t_getSortedKeys = (exp: t_exp) => string[];

type t_toInterfaceSlice = (slice: t_slice) => [t_variables, t_error];
