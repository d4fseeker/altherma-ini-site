import { UploadCloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  label: string;
  className?: string;
}

export function FileUpload({ onFileSelect, label, className }: FileUploadProps) {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith('.ini')) {
      onFileSelect(file);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.name.endsWith('.ini')) {
      onFileSelect(file);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={cn(
        'flex flex-col items-center justify-center w-full border-2 border-dashed rounded-lg p-6 hover:border-primary/50 transition-colors',
        className
      )}
    >
      <UploadCloud className="h-10 w-10 mb-4 text-muted-foreground" />
      <h3 className="text-lg font-semibold mb-2">{label}</h3>
      <Button variant="outline" className="mb-2">
        <label className="cursor-pointer">
          Choose .ini file
          <input
            type="file"
            className="hidden"
            accept=".ini"
            onChange={handleFileChange}
          />
        </label>
      </Button>
      <p className="text-sm text-muted-foreground">
        Drag and drop or click to upload
      </p>
    </div>
  );
}