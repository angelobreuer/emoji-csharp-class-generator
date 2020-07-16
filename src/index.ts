import { createWriteStream } from "fs";
import IndentationWriter from "./IndentationWriter";
import CSharpGenerator from "./CSharpGenerator";
import sanitizeConstantName from "./ConstantSanitizer";
import escapeXml from "./XmlEscaper";
import { Emoji } from "./Emoji";

/**
 * A set of emojis.
 */
var emojis: Emoji[] = require("emoji.json");

// distinct emojis
emojis = emojis.filter(
  (obj, pos, array) =>
    array.map((mapObj) => mapObj.name).indexOf(obj.name) === pos
);

// sort emojis
emojis = emojis.sort((a, b) => {
  const firstName = a.name.toUpperCase();
  const secondName = b.name.toUpperCase();
  return firstName < secondName ? -1 : firstName > secondName ? 1 : 0;
});

// The file target to write to
const fileTarget = createWriteStream("Emojis.cs");

// The indentation writer used to write the generated C# code to
const writer = new IndentationWriter(fileTarget);

// The C# code generator
const generator = new CSharpGenerator(writer);

// write the start of the namespace
generator.writeStartNamespace("Emojis");

// write the start of the "Emojis" class
generator.writeDocumentation(
  "A class that contains a set of emotes.",
  "This file is auto-generated."
);

generator.writeStartClass("Emojis", "public static");

// write the emojis
emojis.forEach((emoji) => {
  const documentation = [
    `Emoji: <c>${escapeXml(emoji.name)}</c>`,
    `Unicode: ${escapeXml(emoji.codes)}`,
    `Category: ${escapeXml(emoji.category)}`,
  ]
    .map((x) => `<para>${x}</para>`)
    .join("\n");

  generator.writeDocumentation(documentation);

  generator.writeConstant(
    "string",
    sanitizeConstantName(emoji.name),
    `"${emoji.char}"`,
    "public"
  );
});

// write the end of the 'Emojis' class
generator.writeEndClass();

// write the end of the 'Emojis' namespace
generator.writeEndNamespace();

// close thefile target
fileTarget.close();
