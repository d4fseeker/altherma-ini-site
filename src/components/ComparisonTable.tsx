import React from 'react';
import { Check, X } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ComparisonRow, SettingsCategory } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ComparisonTableProps {
  rows: ComparisonRow[];
  groupView: boolean;
  categories: SettingsCategory[];
  comparisonMode: boolean;
}

export function ComparisonTable({
  rows,
  groupView,
  categories,
  comparisonMode,
}: ComparisonTableProps) {
  const sortedRows = [...rows].sort((a, b) => a.field.localeCompare(b.field));

  const renderValue = (value: string | number | undefined) => {
    if (value === undefined) return 'N/A';
    return String(value);
  };

  const renderTableRow = (row: ComparisonRow, indent = false) => (
    <TableRow key={row.field}>
      <TableCell className={`font-mono whitespace-nowrap ${indent ? 'pl-12' : ''}`}>
        {row.field}
      </TableCell>
      <TableCell 
        className={cn(
          "font-medium",
          row.isDifferent && "text-blue-500 dark:text-blue-400"
        )}
      >
        {renderValue(row.value)}
      </TableCell>
      {comparisonMode && (
        <TableCell 
          className={cn(
            "font-medium",
            row.comparisonValue !== undefined && 
            row.comparisonValue !== row.value && 
            "text-orange-500 dark:text-orange-400"
          )}
        >
          {renderValue(row.comparisonValue)}
        </TableCell>
      )}
      <TableCell>{renderValue(row.default)}</TableCell>
      <TableCell>{renderValue(row.range)}</TableCell>
      <TableCell className="text-center">
        {row.rw ? (
          <Check className="h-4 w-4 text-green-500 inline-block" />
        ) : (
          <X className="h-4 w-4 text-red-500 inline-block" />
        )}
      </TableCell>
      <TableCell className="min-w-[300px]">{row.description}</TableCell>
    </TableRow>
  );

  const renderDefaultView = () => sortedRows.map((row) => renderTableRow(row));

  const renderGroupView = () => categories.map((category) => (
    <React.Fragment key={category.name}>
      <TableRow>
        <TableCell
          colSpan={comparisonMode ? 7 : 6}
          className="bg-muted/30 font-semibold"
        >
          {category.name}
        </TableCell>
      </TableRow>
      {category.groups.map((group) => (
        <React.Fragment key={group.name}>
          <TableRow>
            <TableCell
              colSpan={comparisonMode ? 7 : 6}
              className="bg-muted/10 pl-8"
            >
              {group.name}
            </TableCell>
          </TableRow>
          {group.fields
            .map((field) => rows.find((row) => row.field === field))
            .filter((row): row is ComparisonRow => row !== undefined)
            .map((row) => renderTableRow(row, true))}
        </React.Fragment>
      ))}
    </React.Fragment>
  ));

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="whitespace-nowrap w-24">Field</TableHead>
            <TableHead>Primary Value</TableHead>
            {comparisonMode && <TableHead>Comparison Value</TableHead>}
            <TableHead>Default</TableHead>
            <TableHead>Range</TableHead>
            <TableHead className="w-[100px] text-center">R/W</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {groupView ? renderGroupView() : renderDefaultView()}
        </TableBody>
      </Table>
    </div>
  );
}