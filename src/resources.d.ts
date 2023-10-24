interface Resources {
  "common": {
    "error": {
      "404": "The page was not found.",
      "unspecific": "Something went wrong."
    },
    "faq": "FAQ",
    "iam": "I am {{authorName}}",
    "insurance": "Insurance",
    "key": "{{what}} is {{how}}",
    "key1": "hello world",
    "key2": "say: {{val}}",
    "look": {
      "deep": "value of look deep"
    },
    "message": "Open the <slot>faq-link</slot> page.",
    "nesting1": "1 $t(nesting2)",
    "nesting2": "2 $t(nesting3)",
    "nesting3": "3",
    "next a b c": "next a b c {{qq}}",
    "next a b c d": {
      "test": "next a b c d {{vv}} test"
    },
    "test": "test",
    "test777": "test - 777"
  },
  "namespaceA": {
    "the the only exist in namespaceA namespace": "namespace A for en"
  }
}

export default Resources;
