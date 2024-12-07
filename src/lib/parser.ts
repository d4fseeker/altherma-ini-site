export function parseIniContent(content: string) {
  const lines = content.split('\n');
  const field_settings: Record<string, string | number> = {};

  let currentSection = '';
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    if (trimmedLine.startsWith('[') && trimmedLine.endsWith(']')) {
      currentSection = trimmedLine.slice(1, -1);
    } else if (trimmedLine && !trimmedLine.startsWith(';')) {
      const [key, value] = trimmedLine.split('=').map((s) => s.trim());
      
      if (currentSection === 'field_settings' && key && value) {
        // Try to convert to number if possible
        const numValue = Number(value);
        field_settings[key] = isNaN(numValue) ? value : numValue;
      }
    }
  }

  return { field_settings };
}