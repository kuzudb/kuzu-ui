export const DATA_TYPES = {
  ANY: "ANY",
  NODE: "NODE",
  REL: "REL",
  RECURSIVE_REL: "RECURSIVE_REL",
  SERIAL: "SERIAL",
  BOOL: "BOOL",
  INT64: "INT64",
  INT32: "INT32",
  INT16: "INT16",
  INT8: "INT8",
  UINT64: "UINT64",
  UINT32: "UINT32",
  UINT16: "UINT16",
  UINT8: "UINT8",
  DOUBLE: "DOUBLE",
  FLOAT: "FLOAT",
  DATE: "DATE",
  TIMESTAMP: "TIMESTAMP",
  INTERVAL: "INTERVAL",
  FIXED_LIST: "FIXED_LIST",
  INTERNAL_ID: "INTERNAL_ID",
  ARROW_COLUMN: "ARROW_COLUMN",
  STRING: "STRING",
  BLOB: "BLOB",
  VAR_LIST: "VAR_LIST",
  STRUCT: "STRUCT",
  MAP: "MAP",
  UNION: "UNION",
};

export const INTERNAL_DATA_TYPES = [
  DATA_TYPES.ANY,
  DATA_TYPES.NODE,
  DATA_TYPES.REL,
  DATA_TYPES.RECURSIVE_REL,
  DATA_TYPES.INTERNAL_ID,
  DATA_TYPES.ARROW_COLUMN,
];

export const SCHEMA_ACTION_TYPES = {
  DROP_TABLE: "dropTable",
  DROP_PROPERTY: "dropProperty",
  RENAME_PROPERTY: "renameProperty",
};

export const UI_SIZE = {
  DEFAULT_EDITOR_HEIGHT: 115,
  DEFAULT_MARGIN: 20,
  SHELL_TOOL_BAR_WIDTH: 32,
  DEFAULT_BORDER_WIDTH: 2,
};

export const SHOW_REL_LABELS_OPTIONS = {
  ALWAYS: "ALWAYS",
  HOVER: "HOVER",
  NEVER: "NEVER",
};
