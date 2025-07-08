import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ArcaeaFileFormatLexer, ArcaeaFileFormatParser } from "../dist/index.mjs";

describe("basic parser feature", () => {
  it("should parse aff events", () => {
    const inputStream = CharStreams.fromString(`\
timing(0,180.00,4.00);
arc(1000,1333,-0.25,0.75,sisi,1.00,0.00,0,none,true);
(1333,4);
`);
    const lexer = new ArcaeaFileFormatLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new ArcaeaFileFormatParser(tokenStream);
    const items = parser.file().body().item();
    if (!Array.isArray(items)) {
      return fail("Expected items to be an array");
    }
    expect(items).toHaveLength(3);
    expect(items[0].event().Word().text).toBe("timing");
    expect(items[1].event().Word().text).toBe("arc");
    const valueInValues = items[1].event().values().value();
    if (!Array.isArray(valueInValues)) {
      return fail("Expected valueInValues to be an array");
    }
    expect(valueInValues[0].Int().text).toBe("1000");
    expect(valueInValues[1].Int().text).toBe("1333");
    expect(valueInValues[2].Float().text).toBe("-0.25");
    expect(valueInValues[3].Float().text).toBe("0.75");
    expect(valueInValues[4].Word().text).toBe("sisi");
    expect(valueInValues[5].Float().text).toBe("1.00");
    expect(valueInValues[6].Float().text).toBe("0.00");
    expect(valueInValues[7].Int().text).toBe("0");
    expect(valueInValues[8].Word().text).toBe("none");
    expect(valueInValues[9].Word().text).toBe("true");
    const anonymousEvent = items[2].event();
    expect(anonymousEvent.Word()).toBeUndefined();
    expect(anonymousEvent.values().value()).toHaveLength(2);
    expect(anonymousEvent.values().value()[0].Int().text).toBe("1333");
    expect(anonymousEvent.values().value()[1].Int().text).toBe("4");
  });
});
