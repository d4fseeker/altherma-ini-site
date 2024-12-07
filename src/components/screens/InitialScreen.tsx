import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ModelSelect } from '@/components/ModelSelect';
import { FileUpload } from '@/components/FileUpload';
import { parseIniContent } from '@/lib/parser';
import { ParsedConfig } from '@/lib/types';

interface InitialScreenProps {
  selectedModel: string;
  onModelSelect: (modelId: string) => void;
  onPrimaryConfig: (config: ParsedConfig) => void;
  onComparisonConfig: (config: ParsedConfig | null) => void;
  onAnalyze: () => void;
}

export function InitialScreen({
  selectedModel,
  onModelSelect,
  onPrimaryConfig,
  onComparisonConfig,
  onAnalyze,
}: InitialScreenProps) {
  const handlePrimaryFileSelect = async (file: File) => {
    const content = await file.text();
    const config = parseIniContent(content);
    onPrimaryConfig(config);
  };

  const handleComparisonFileSelect = async (file: File) => {
    const content = await file.text();
    const config = parseIniContent(content);
    onComparisonConfig(config);
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center">
            Heatpump Configuration Analyzer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <ModelSelect
              value={selectedModel}
              onValueChange={onModelSelect}
            />
            <div className="space-y-4">
              <FileUpload
                onFileSelect={handlePrimaryFileSelect}
                label="Upload Primary Configuration File"
                className="h-[200px]"
              />
              <FileUpload
                onFileSelect={handleComparisonFileSelect}
                label="Upload Comparison File (Optional)"
                className="h-[200px]"
              />
            </div>
            <Button
              onClick={onAnalyze}
              disabled={!selectedModel}
              className="w-full"
            >
              Analyze Configuration
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}