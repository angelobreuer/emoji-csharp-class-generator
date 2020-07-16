import { WriteStream } from "fs";

/**
 * A class used to write indented strings to an underlying stream.
 */
export default class IndentationWriter {
  /**
   * The write stream to write to.
   */
  private readonly stream: WriteStream;

  /**
   * The indentation level.
   * @description Zero or negative = no indentation.
   */
  public indentation: number;

  /**
   * Initializes a new instance of the IndentationWriter class.
   * @param stream the underlying stream to write to
   */
  constructor(stream: WriteStream) {
    this.stream = stream;
    this.indentation = 0;
  }

  /**
   * Writes the specified content with a trailing new line character.
   * @param chunk the chunk data to write
   */
  writeLine(chunk: any) {
    this.write(chunk);
    this.stream.write("\n");
  }

  /**
   * Writes the specified content.
   * @param chunk the chunk data to write
   */
  write(chunk: any) {
    if (this.indentation > 0) {
      this.stream.write("    ".repeat(this.indentation));
    }

    this.stream.write(chunk);
  }
}
