type t_ScalarDefault = "string";
type t_ScalarInt = "int";
type t_ScalarFloat = "float";
type t_ScalarString = "string";
type t_ScalarBool = "bool";
type t_ScalarDateTime = "datetime";
type t_ScalarGeo = "geo";
type t_ScalarPassword = "password";
type t_ScalarUID = "uid";

type t_DGraphScalar =
  | t_ScalarDefault
  | t_ScalarInt
  | t_ScalarFloat
  | t_ScalarString
  | t_ScalarBool
  | t_ScalarDateTime
  | t_ScalarGeo
  | t_ScalarPassword
  | t_ScalarUID;

type t_TokenizerExact = "exact";
type t_TokenizerHash = "hash";
type t_TokenizerTerm = "term";
type t_TokenizerFulltext = "fulltext";
type t_TokenizerTrigram = "trigram";

type t_StringIndexTokenizer =
  | t_TokenizerExact
  | t_TokenizerHash
  | t_TokenizerTerm
  | t_TokenizerFulltext
  | t_TokenizerTrigram;

type t_TokenizerYear = "year";
type t_TokenizerMonth = "month";
type t_TokenizerDay = "day";
type t_TokenizerHour = "hour";

type t_DateIndexTokenizer =
  | t_TokenizerYear
  | t_TokenizerMonth
  | t_TokenizerDay
  | t_TokenizerHour;

interface t_DGraphPredicate {
  name: string;
  index: boolean;
  upsert: boolean;
  list: boolean;
  lang: boolean;
  reverse: boolean;
  tokenizers: string[];
  scalarType: t_DGraphScalar;
  ToString: () => string;
}

interface i_PredicateBuilder {
  predicate: t_DGraphPredicate;
  Index: () => i_PredicateBuilder;
  Upsert: () => i_PredicateBuilder;
  List: () => i_PredicateBuilder;
  Lang: () => i_PredicateBuilder;
  Reverse: () => i_PredicateBuilder;
}

interface i_PredicateStringBuilder extends Omit<i_PredicateBuilder, "Index"> {
  HasIndex: (tokenizer: t_StringIndexTokenizer) => boolean;
  Index: (tokenizer: t_StringIndexTokenizer) => i_PredicateStringBuilder;
  IndexExact: () => i_PredicateStringBuilder;
  IndexHash: () => i_PredicateStringBuilder;
  IndexTerm: () => i_PredicateStringBuilder;
  IndexFulltext: () => i_PredicateStringBuilder;
  IndexTrigram: () => i_PredicateStringBuilder;
}

interface i_PredicateDateBuilder extends Omit<i_PredicateBuilder, "Index"> {
  HasIndex: (tokenizer: t_DateIndexTokenizer) => boolean;
  Index: (tokenizer: t_DateIndexTokenizer) => i_PredicateDateBuilder;
  IndexYear: (tokenizer: t_DateIndexTokenizer) => i_PredicateDateBuilder;
  IndexMonth: (tokenizer: t_DateIndexTokenizer) => i_PredicateDateBuilder;
  IndexDay: (tokenizer: t_DateIndexTokenizer) => i_PredicateDateBuilder;
  IndexHour: (tokenizer: t_DateIndexTokenizer) => i_PredicateDateBuilder;
}
