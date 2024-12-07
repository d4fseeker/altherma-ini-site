export interface FieldSetting {
  description: string;
  default: number | string | ((settings: Record<string, any>) => number | string);
  range: string | ((settings: Record<string, any>) => string);
  rw: boolean;
}

export interface HeatpumpModel {
  id: string;
  name: string;
  settings: Record<string, FieldSetting>;
}

export interface ParsedConfig {
  field_settings: Record<string, string | number>;
}

export interface ComparisonRow {
  field: string;
  value: string | number;
  comparisonValue?: string | number;
  default: string | number;
  range: string;
  rw: boolean;
  description: string;
  isDifferent: boolean;
}

export interface SettingsGroup {
  name: string;
  fields: string[];
}

export interface SettingsCategory {
  name: string;
  groups: SettingsGroup[];
}