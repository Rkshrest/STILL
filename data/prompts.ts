export const reflectionPrompts: string[] = [
  "What stayed with you here?",
  "What emotion lives in this moment?",
  "What do you think happened before this?",
  "What feels unsaid here?",
  "What kind of silence exists here?",
  "What do you notice first?",
  "Who else is in this frame, unseen?",
  "What would you ask this person if you could?",
  "What does this person carry that we cannot see?",
  "What time of day does this feel like, and why?",
];

/**
 * Returns a prompt for a given story index, cycling through the pool.
 * Ensures no two adjacent stories share the same prompt.
 */
export function getPromptForIndex(index: number): string {
  return reflectionPrompts[index % reflectionPrompts.length];
}

/**
 * Returns a shuffled copy of the prompt pool for a session.
 * Use this to build a non-repeating queue for Reflection Mode.
 */
export function shufflePrompts(): string[] {
  const pool = [...reflectionPrompts];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool;
}
