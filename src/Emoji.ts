/**
 * Represents an emoji.
 */
export interface Emoji {
  /**
   * The character the emoji is represented by.
   */
  char: string;

  /**
   * The unicode code sequence used to write the emoji.
   */
  codes: string;

  /**
   * The name of the emoji.
   */
  name: string;

  /**
   * The category of the emoji.
   */
  category: string;
}
