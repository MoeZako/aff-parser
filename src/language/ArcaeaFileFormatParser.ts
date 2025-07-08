// This file is modified by scripts/gene-parser.js
// Generated from ../../Arcade-plus/Assets/Scripts/Aff/ArcaeaFileFormat.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ArcaeaFileFormatListener } from "./ArcaeaFileFormatListener";

export class ArcaeaFileFormatParser extends Parser {
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
	public static readonly RULE_value = 0;
	public static readonly RULE_values = 1;
	public static readonly RULE_event = 2;
	public static readonly RULE_item = 3;
	public static readonly RULE_subevents = 4;
	public static readonly RULE_segment = 5;
	public static readonly RULE_body = 6;
	public static readonly RULE_file = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"value", "values", "event", "item", "subevents", "segment", "body", "file",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'('", "')'", "'['", "']'", "'{'", "'}'", "','", 
		"';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Whitespace", "LParen", "RParen", "LBrack", "RBrack", "LBrace", 
		"RBrace", "Comma", "Semicolon", "Word", "Int", "Float",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ArcaeaFileFormatParser._LITERAL_NAMES, ArcaeaFileFormatParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ArcaeaFileFormatParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ArcaeaFileFormat.g4"; }

	// @Override
	public get ruleNames(): string[] { return ArcaeaFileFormatParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ArcaeaFileFormatParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ArcaeaFileFormatParser._ATN, this);
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ArcaeaFileFormatParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 16;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ArcaeaFileFormatParser.Word) | (1 << ArcaeaFileFormatParser.Int) | (1 << ArcaeaFileFormatParser.Float))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public values(): ValuesContext {
		let _localctx: ValuesContext = new ValuesContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ArcaeaFileFormatParser.RULE_values);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this.match(ArcaeaFileFormatParser.LParen);
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ArcaeaFileFormatParser.Word) | (1 << ArcaeaFileFormatParser.Int) | (1 << ArcaeaFileFormatParser.Float))) !== 0)) {
				{
				this.state = 19;
				this.value();
				this.state = 24;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ArcaeaFileFormatParser.Comma) {
					{
					{
					this.state = 20;
					this.match(ArcaeaFileFormatParser.Comma);
					this.state = 21;
					this.value();
					}
					}
					this.state = 26;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 29;
			this.match(ArcaeaFileFormatParser.RParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public event(): EventContext {
		let _localctx: EventContext = new EventContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ArcaeaFileFormatParser.RULE_event);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ArcaeaFileFormatParser.Word) {
				{
				this.state = 31;
				this.match(ArcaeaFileFormatParser.Word);
				}
			}

			this.state = 34;
			this.values();
			this.state = 36;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ArcaeaFileFormatParser.LBrack) {
				{
				this.state = 35;
				this.subevents();
				}
			}

			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ArcaeaFileFormatParser.LBrace) {
				{
				this.state = 38;
				this.segment();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public item(): ItemContext {
		let _localctx: ItemContext = new ItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ArcaeaFileFormatParser.RULE_item);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this.event();
			this.state = 42;
			this.match(ArcaeaFileFormatParser.Semicolon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subevents(): SubeventsContext {
		let _localctx: SubeventsContext = new SubeventsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ArcaeaFileFormatParser.RULE_subevents);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.match(ArcaeaFileFormatParser.LBrack);
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ArcaeaFileFormatParser.LParen || _la === ArcaeaFileFormatParser.Word) {
				{
				this.state = 45;
				this.event();
				this.state = 50;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ArcaeaFileFormatParser.Comma) {
					{
					{
					this.state = 46;
					this.match(ArcaeaFileFormatParser.Comma);
					this.state = 47;
					this.event();
					}
					}
					this.state = 52;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 55;
			this.match(ArcaeaFileFormatParser.RBrack);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public segment(): SegmentContext {
		let _localctx: SegmentContext = new SegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ArcaeaFileFormatParser.RULE_segment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this.match(ArcaeaFileFormatParser.LBrace);
			this.state = 58;
			this.body();
			this.state = 59;
			this.match(ArcaeaFileFormatParser.RBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ArcaeaFileFormatParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ArcaeaFileFormatParser.LParen || _la === ArcaeaFileFormatParser.Word) {
				{
				{
				this.state = 61;
				this.item();
				}
				}
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ArcaeaFileFormatParser.RULE_file);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.body();
			this.state = 68;
			this.match(ArcaeaFileFormatParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0EI\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x07\x03\x19\n\x03\f\x03\x0E\x03\x1C\v\x03\x05\x03\x1E\n\x03\x03\x03" +
		"\x03\x03\x03\x04\x05\x04#\n\x04\x03\x04\x03\x04\x05\x04\'\n\x04\x03\x04" +
		"\x05\x04*\n\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x07\x063\n\x06\f\x06\x0E\x066\v\x06\x05\x068\n\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\b\x07\bA\n\b\f\b\x0E\bD\v\b\x03\t\x03" +
		"\t\x03\t\x03\t\x02\x02\x02\n\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x02\x03\x03\x02\f\x0E\x02H\x02\x12\x03\x02\x02\x02\x04" +
		"\x14\x03\x02\x02\x02\x06\"\x03\x02\x02\x02\b+\x03\x02\x02\x02\n.\x03\x02" +
		"\x02\x02\f;\x03\x02\x02\x02\x0EB\x03\x02\x02\x02\x10E\x03\x02\x02\x02" +
		"\x12\x13\t\x02\x02\x02\x13\x03\x03\x02\x02\x02\x14\x1D\x07\x04\x02\x02" +
		"\x15\x1A\x05\x02\x02\x02\x16\x17\x07\n\x02\x02\x17\x19\x05\x02\x02\x02" +
		"\x18\x16\x03\x02\x02\x02\x19\x1C\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02" +
		"\x1A\x1B\x03\x02\x02\x02\x1B\x1E\x03\x02\x02\x02\x1C\x1A\x03\x02\x02\x02" +
		"\x1D\x15\x03\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02" +
		"\x1F \x07\x05\x02\x02 \x05\x03\x02\x02\x02!#\x07\f\x02\x02\"!\x03\x02" +
		"\x02\x02\"#\x03\x02\x02\x02#$\x03\x02\x02\x02$&\x05\x04\x03\x02%\'\x05" +
		"\n\x06\x02&%\x03\x02\x02\x02&\'\x03\x02\x02\x02\')\x03\x02\x02\x02(*\x05" +
		"\f\x07\x02)(\x03\x02\x02\x02)*\x03\x02\x02\x02*\x07\x03\x02\x02\x02+," +
		"\x05\x06\x04\x02,-\x07\v\x02\x02-\t\x03\x02\x02\x02.7\x07\x06\x02\x02" +
		"/4\x05\x06\x04\x0201\x07\n\x02\x0213\x05\x06\x04\x0220\x03\x02\x02\x02" +
		"36\x03\x02\x02\x0242\x03\x02\x02\x0245\x03\x02\x02\x0258\x03\x02\x02\x02" +
		"64\x03\x02\x02\x027/\x03\x02\x02\x0278\x03\x02\x02\x0289\x03\x02\x02\x02" +
		"9:\x07\x07\x02\x02:\v\x03\x02\x02\x02;<\x07\b\x02\x02<=\x05\x0E\b\x02" +
		"=>\x07\t\x02\x02>\r\x03\x02\x02\x02?A\x05\b\x05\x02@?\x03\x02\x02\x02" +
		"AD\x03\x02\x02\x02B@\x03\x02\x02\x02BC\x03\x02\x02\x02C\x0F\x03\x02\x02" +
		"\x02DB\x03\x02\x02\x02EF\x05\x0E\b\x02FG\x07\x02\x02\x03G\x11\x03\x02" +
		"\x02\x02\n\x1A\x1D\"&)47B";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ArcaeaFileFormatParser.__ATN) {
			ArcaeaFileFormatParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ArcaeaFileFormatParser._serializedATN));
		}

		return ArcaeaFileFormatParser.__ATN;
	}

}

export class ValueContext extends ParserRuleContext {
	public Word(): TerminalNode | undefined { return this.tryGetToken(ArcaeaFileFormatParser.Word, 0); }
	public Int(): TerminalNode | undefined { return this.tryGetToken(ArcaeaFileFormatParser.Int, 0); }
	public Float(): TerminalNode | undefined { return this.tryGetToken(ArcaeaFileFormatParser.Float, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArcaeaFileFormatParser.RULE_value; }
	// @Override
	public enterRule(listener: ArcaeaFileFormatListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: ArcaeaFileFormatListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
}


export class ValuesContext extends ParserRuleContext {
	public LParen(): TerminalNode { return this.getToken(ArcaeaFileFormatParser.LParen, 0); }
	public RParen(): TerminalNode { return this.getToken(ArcaeaFileFormatParser.RParen, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ArcaeaFileFormatParser.Comma);
		} else {
			return this.getToken(ArcaeaFileFormatParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArcaeaFileFormatParser.RULE_values; }
	// @Override
	public enterRule(listener: ArcaeaFileFormatListener): void {
		if (listener.enterValues) {
			listener.enterValues(this);
		}
	}
	// @Override
	public exitRule(listener: ArcaeaFileFormatListener): void {
		if (listener.exitValues) {
			listener.exitValues(this);
		}
	}
}


export class EventContext extends ParserRuleContext {
	public values(): ValuesContext {
		return this.getRuleContext(0, ValuesContext);
	}
	public Word(): TerminalNode | undefined { return this.tryGetToken(ArcaeaFileFormatParser.Word, 0); }
	public subevents(): SubeventsContext | undefined {
		return this.tryGetRuleContext(0, SubeventsContext);
	}
	public segment(): SegmentContext | undefined {
		return this.tryGetRuleContext(0, SegmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArcaeaFileFormatParser.RULE_event; }
	// @Override
	public enterRule(listener: ArcaeaFileFormatListener): void {
		if (listener.enterEvent) {
			listener.enterEvent(this);
		}
	}
	// @Override
	public exitRule(listener: ArcaeaFileFormatListener): void {
		if (listener.exitEvent) {
			listener.exitEvent(this);
		}
	}
}


export class ItemContext extends ParserRuleContext {
	public event(): EventContext {
		return this.getRuleContext(0, EventContext);
	}
	public Semicolon(): TerminalNode { return this.getToken(ArcaeaFileFormatParser.Semicolon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArcaeaFileFormatParser.RULE_item; }
	// @Override
	public enterRule(listener: ArcaeaFileFormatListener): void {
		if (listener.enterItem) {
			listener.enterItem(this);
		}
	}
	// @Override
	public exitRule(listener: ArcaeaFileFormatListener): void {
		if (listener.exitItem) {
			listener.exitItem(this);
		}
	}
}


export class SubeventsContext extends ParserRuleContext {
	public LBrack(): TerminalNode { return this.getToken(ArcaeaFileFormatParser.LBrack, 0); }
	public RBrack(): TerminalNode { return this.getToken(ArcaeaFileFormatParser.RBrack, 0); }
	public event(): EventContext[];
	public event(i: number): EventContext;
	public event(i?: number): EventContext | EventContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventContext);
		} else {
			return this.getRuleContext(i, EventContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ArcaeaFileFormatParser.Comma);
		} else {
			return this.getToken(ArcaeaFileFormatParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArcaeaFileFormatParser.RULE_subevents; }
	// @Override
	public enterRule(listener: ArcaeaFileFormatListener): void {
		if (listener.enterSubevents) {
			listener.enterSubevents(this);
		}
	}
	// @Override
	public exitRule(listener: ArcaeaFileFormatListener): void {
		if (listener.exitSubevents) {
			listener.exitSubevents(this);
		}
	}
}


export class SegmentContext extends ParserRuleContext {
	public LBrace(): TerminalNode { return this.getToken(ArcaeaFileFormatParser.LBrace, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public RBrace(): TerminalNode { return this.getToken(ArcaeaFileFormatParser.RBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArcaeaFileFormatParser.RULE_segment; }
	// @Override
	public enterRule(listener: ArcaeaFileFormatListener): void {
		if (listener.enterSegment) {
			listener.enterSegment(this);
		}
	}
	// @Override
	public exitRule(listener: ArcaeaFileFormatListener): void {
		if (listener.exitSegment) {
			listener.exitSegment(this);
		}
	}
}


export class BodyContext extends ParserRuleContext {
	public item(): ItemContext[];
	public item(i: number): ItemContext;
	public item(i?: number): ItemContext | ItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ItemContext);
		} else {
			return this.getRuleContext(i, ItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArcaeaFileFormatParser.RULE_body; }
	// @Override
	public enterRule(listener: ArcaeaFileFormatListener): void {
		if (listener.enterBody) {
			listener.enterBody(this);
		}
	}
	// @Override
	public exitRule(listener: ArcaeaFileFormatListener): void {
		if (listener.exitBody) {
			listener.exitBody(this);
		}
	}
}


export class FileContext extends ParserRuleContext {
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public EOF(): TerminalNode { return this.getToken(ArcaeaFileFormatParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArcaeaFileFormatParser.RULE_file; }
	// @Override
	public enterRule(listener: ArcaeaFileFormatListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: ArcaeaFileFormatListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
}


