/**
 * Utility to conditionally combine multiple class names.
 * Accepts strings, booleans, undefined, or null values.
 */

export type ClassValue = string | number | boolean | undefined | null;

/**
 * Combines truthy class names into a single space-delimited string.
 */
export function classNames(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}

export const cn = classNames;
