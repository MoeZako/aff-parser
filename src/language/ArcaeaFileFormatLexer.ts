// This file is modified by scripts/gene-parser.js
// Generated from ../../Arcade-plus/Assets/Scripts/Aff/ArcaeaFileFormat.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ArcaeaFileFormatLexer extends Lexer {
	public static readonly Whitespace = 1;
	public static readonly LParen = 2;
	public static readonly RParen = 3;
	public static readonly LBrack = 4;
	public static readonly RBrack = 5;
	public static readonly LBrace = 6;
	public static readonly RBrace = 7;
	public static readonly Comma = 8;
	public static readonly Semicolon = 9;
	public static readonly Word = 10;
	public static readonly Int = 11;
	public static readonly Float = 12;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"Whitespace", "LParen", "RParen", "LBrack", "RBrack", "LBrace", "RBrace", 
		"Comma", "Semicolon", "UNDERLINE", "ALPHABET", "DIGITSTART", "ZERO", "DIGIT", 
		"DOT", "NEGATIVE", "Word", "Int", "Float",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'('", "')'", "'['", "']'", "'{'", "'}'", "','", 
		"';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Whitespace", "LParen", "RParen", "LBrack", "RBrack", "LBrace", 
		"RBrace", "Comma", "Semicolon", "Word", "Int", "Float",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ArcaeaFileFormatLexer._LITERAL_NAMES, ArcaeaFileFormatLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ArcaeaFileFormatLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ArcaeaFileFormatLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "ArcaeaFileFormat.g4"; }

	// @Override
	public get ruleNames(): string[] { return ArcaeaFileFormatLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ArcaeaFileFormatLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ArcaeaFileFormatLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ArcaeaFileFormatLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0Ej\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0FH\n\x0F\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12R\n\x12\f\x12\x0E\x12U\v\x12" +
		"\x03\x13\x05\x13X\n\x13\x03\x13\x03\x13\x03\x13\x07\x13]\n\x13\f\x13\x0E" +
		"\x13`\v\x13\x05\x13b\n\x13\x03\x14\x03\x14\x03\x14\x06\x14g\n\x14\r\x14" +
		"\x0E\x14h\x02\x02\x02\x15\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06" +
		"\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\x02\x17\x02\x02" +
		"\x19\x02\x02\x1B\x02\x02\x1D\x02\x02\x1F\x02\x02!\x02\x02#\x02\f%\x02" +
		"\r\'\x02\x0E\x03\x02\x05\f\x02\v\x0F\"\"\x87\x87\xA2\xA2\u1682\u1682\u2002" +
		"\u200C\u202A\u202B\u2031\u2031\u2061\u2061\u3002\u3002\x04\x02C\\c|\x03" +
		"\x023;\x02j\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03" +
		"\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02" +
		"\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02" +
		"\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02" +
		"\x03)\x03\x02\x02\x02\x05-\x03\x02\x02\x02\x07/\x03\x02\x02\x02\t1\x03" +
		"\x02\x02\x02\v3\x03\x02\x02\x02\r5\x03\x02\x02\x02\x0F7\x03\x02\x02\x02" +
		"\x119\x03\x02\x02\x02\x13;\x03\x02\x02\x02\x15=\x03\x02\x02\x02\x17?\x03" +
		"\x02\x02\x02\x19A\x03\x02\x02\x02\x1BC\x03\x02\x02\x02\x1DG\x03\x02\x02" +
		"\x02\x1FI\x03\x02\x02\x02!K\x03\x02\x02\x02#M\x03\x02\x02\x02%W\x03\x02" +
		"\x02\x02\'c\x03\x02\x02\x02)*\t\x02\x02\x02*+\x03\x02\x02\x02+,\b\x02" +
		"\x02\x02,\x04\x03\x02\x02\x02-.\x07*\x02\x02.\x06\x03\x02\x02\x02/0\x07" +
		"+\x02\x020\b\x03\x02\x02\x0212\x07]\x02\x022\n\x03\x02\x02\x0234\x07_" +
		"\x02\x024\f\x03\x02\x02\x0256\x07}\x02\x026\x0E\x03\x02\x02\x0278\x07" +
		"\x7F\x02\x028\x10\x03\x02\x02\x029:\x07.\x02\x02:\x12\x03\x02\x02\x02" +
		";<\x07=\x02\x02<\x14\x03\x02\x02\x02=>\x07a\x02\x02>\x16\x03\x02\x02\x02" +
		"?@\t\x03\x02\x02@\x18\x03\x02\x02\x02AB\t\x04\x02\x02B\x1A\x03\x02\x02" +
		"\x02CD\x072\x02\x02D\x1C\x03\x02\x02\x02EH\x05\x19\r\x02FH\x05\x1B\x0E" +
		"\x02GE\x03\x02\x02\x02GF\x03\x02\x02\x02H\x1E\x03\x02\x02\x02IJ\x070\x02" +
		"\x02J \x03\x02\x02\x02KL\x07/\x02\x02L\"\x03\x02\x02\x02MS\x05\x17\f\x02" +
		"NR\x05\x15\v\x02OR\x05\x1D\x0F\x02PR\x05\x17\f\x02QN\x03\x02\x02\x02Q" +
		"O\x03\x02\x02\x02QP\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02\x02\x02" +
		"ST\x03\x02\x02\x02T$\x03\x02\x02\x02US\x03\x02\x02\x02VX\x05!\x11\x02" +
		"WV\x03\x02\x02\x02WX\x03\x02\x02\x02Xa\x03\x02\x02\x02Yb\x05\x1B\x0E\x02" +
		"Z^\x05\x19\r\x02[]\x05\x1D\x0F\x02\\[\x03\x02\x02\x02]`\x03\x02\x02\x02" +
		"^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_b\x03\x02\x02\x02`^\x03\x02\x02" +
		"\x02aY\x03\x02\x02\x02aZ\x03\x02\x02\x02b&\x03\x02\x02\x02cd\x05%\x13" +
		"\x02df\x05\x1F\x10\x02eg\x05\x1D\x0F\x02fe\x03\x02\x02\x02gh\x03\x02\x02" +
		"\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02i(\x03\x02\x02\x02\n\x02GQSW^" +
		"ah\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ArcaeaFileFormatLexer.__ATN) {
			ArcaeaFileFormatLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ArcaeaFileFormatLexer._serializedATN));
		}

		return ArcaeaFileFormatLexer.__ATN;
	}

}

