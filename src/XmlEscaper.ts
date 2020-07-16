/**
 * Escapes the specified string for XML.
 * @param str the XML string to escape
 */
function escapeXml(str: string) {
  return str.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
    }
  });
}

export default escapeXml;
