import { useState } from 'react';
import { InitialScreen } from '@/components/screens/InitialScreen';
import { ResultScreen } from '@/components/screens/ResultScreen';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ParsedConfig } from '@/lib/types';

function App() {
  const [selectedModel, setSelectedModel] = useState('');
  const [primaryConfig, setPrimaryConfig] = useState<ParsedConfig | null>(null);
  const [comparisonConfig, setComparisonConfig] = useState<ParsedConfig | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleReset = () => {
    setPrimaryConfig(null);
    setComparisonConfig(null);
    setSelectedModel('');
    setShowResults(false);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background p-8">
        <div className="container max-w-6xl mx-auto">
          {showResults ? (
            <ResultScreen
              selectedModel={selectedModel}
              primaryConfig={primaryConfig}
              comparisonConfig={comparisonConfig}
              onBack={handleReset}
            />
          ) : (
            <InitialScreen
              selectedModel={selectedModel}
              onModelSelect={setSelectedModel}
              onPrimaryConfig={setPrimaryConfig}
              onComparisonConfig={setComparisonConfig}
              onAnalyze={() => setShowResults(true)}
            />
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;