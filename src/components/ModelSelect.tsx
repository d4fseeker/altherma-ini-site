import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { HEATPUMP_MODELS } from '@/lib/models';

interface ModelSelectProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function ModelSelect({ value, onValueChange }: ModelSelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a heatpump model" />
      </SelectTrigger>
      <SelectContent>
        {HEATPUMP_MODELS.map((model) => (
          <SelectItem key={model.id} value={model.id}>
            {model.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}