import { ComparisonRow, HeatpumpModel, ParsedConfig } from './types';

function evaluateDefault(
  setting: { default: number | string | ((settings: Record<string, any>) => number | string) },
  settings: Record<string, any>
): string | number {
  if (typeof setting.default === 'function') {
    try {
      return setting.default(settings);
    } catch (error) {
      return 'N/A';
    }
  }
  return setting.default;
}

export function generateComparisonRows(
  model: HeatpumpModel,
  primaryConfig: ParsedConfig,
  comparisonConfig: ParsedConfig | null
): ComparisonRow[] {
  return Object.entries(model.settings).map(([field, setting]) => {
    const primaryValue = primaryConfig.field_settings[field];
    const comparisonValue = comparisonConfig?.field_settings[field];
    const defaultValue = evaluateDefault(setting, primaryConfig.field_settings);

    return {
      field,
      value: primaryValue ?? 'N/A',
      comparisonValue: comparisonValue,
      default: defaultValue,
      range: typeof setting.range === 'function' 
        ? evaluateDefault({ default: setting.range }, primaryConfig.field_settings)
        : setting.range,
      rw: setting.rw,
      description: setting.description,
      isDifferent: primaryValue !== undefined && primaryValue !== defaultValue,
    };
  });
}