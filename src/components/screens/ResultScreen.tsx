import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SETTINGS_CATEGORIES } from '@/lib/groups';
import { HEATPUMP_MODELS } from '@/lib/models';
import { ComparisonRow, ParsedConfig } from '@/lib/types';
import { generateComparisonRows } from '@/lib/comparison';

interface ResultScreenProps {
  selectedModel: string;
  primaryConfig: ParsedConfig | null;
  comparisonConfig: ParsedConfig | null;
  onBack: () => void;
}

export function ResultScreen({
  selectedModel,
  primaryConfig,
  comparisonConfig,
  onBack,
}: ResultScreenProps) {
  const model = HEATPUMP_MODELS.find((m) => m.id === selectedModel);
  if (!model || !primaryConfig) return null;

  const comparisonRows = generateComparisonRows(model, primaryConfig, comparisonConfig);
  const groupedFields = new Set(SETTINGS_CATEGORIES.flatMap(category => 
    category.groups.flatMap(group => group.fields)
  ));
  
  const ungroupedRows = comparisonRows.filter(row => !groupedFields.has(row.field));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="h-8 w-8"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          Heatpump Configuration Analyzer
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <ComparisonTable
            rows={comparisonRows}
            groupView={true}
            categories={SETTINGS_CATEGORIES}
            comparisonMode={!!comparisonConfig}
          />
          
          {ungroupedRows.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Ungrouped Fields</h3>
              <ComparisonTable
                rows={ungroupedRows}
                groupView={false}
                categories={[]}
                comparisonMode={!!comparisonConfig}
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}