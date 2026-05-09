export function showStatusLineConflictModal(_foreignCommand: string): Promise<'replace' | 'keep'> {
  return Promise.resolve('keep');
}
