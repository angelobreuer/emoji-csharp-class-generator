import IndentationWriter from "./IndentationWriter";

/**
 * A minimalistic C# code generator for simple usage.
 */
export default class CSharpGenerator {
  /**
   * The indentation writer to write the generated code to.
   */
  private readonly writer: IndentationWriter;

  /**
   * Initializes a new instance of the CSharpGenerator class.
   * @param writer the indentation writer to write the generated code to
   */
  constructor(writer: IndentationWriter) {
    this.writer = writer;
  }

  /**
   * Writes the start of a namespace.
   * @param namespace the name of the namespace
   */
  writeStartNamespace(namespace: string) {
    this.writer.writeLine(`namespace ${namespace}`);
    this.writer.writeLine("{");
    this.writer.indentation++;
  }

  /**
   * Writes the end of a namespace.
   */
  writeEndNamespace() {
    this.writer.indentation--;
    this.writer.writeLine("}");
  }

  /**
   * Writes the start of a class.
   * @param name the name of the class
   * @param modifiers the class access modifiers
   */
  writeStartClass(name: string, modifiers?: string) {
    this.writer.writeLine(`${modifiers} class ${name}`);
    this.writer.writeLine("{");
    this.writer.indentation++;
  }

  /**
   * Writes the end of a class.
   */
  writeEndClass() {
    this.writer.indentation--;
    this.writer.writeLine("}");
  }

  /**
   * Writes a constant.
   * @description A constant must be in a class.
   * @param type the type of the constant
   * @param name the name of the constant
   * @param value the value of the constant
   * @param modifiers additional access modifiers for the constant
   */
  writeConstant(type: string, name: string, value: string, modifiers?: string) {
    this.writer.writeLine(`${modifiers} const ${type} ${name} = ${value};`);
    this.writer.writeLine("");
  }

  /**
   * Writes a documentation.
   * @param summary the summary content of the documentation (may contain line breaks)
   */
  writeDocumentation(summary: string, remarks?: string) {
    this.writer.writeLine("/// <summary>");

    summary.split("\n").forEach((line) => {
      this.writer.writeLine(`/// ${line}`);
    });

    this.writer.writeLine("/// </summary>");

    if (remarks) {
      this.writer.writeLine(`/// <remarks>${remarks}</remarks>`);
    }
  }
}
