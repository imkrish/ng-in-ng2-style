export const listOf = (commaSeparatedValues: string): string[] =>
    commaSeparatedValues.split(',').map(i => i.trim())
