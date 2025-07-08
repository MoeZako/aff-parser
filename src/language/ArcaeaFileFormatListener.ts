// This file is modified by scripts/gene-parser.js
// Generated from ../../Arcade-plus/Assets/Scripts/Aff/ArcaeaFileFormat.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ValueContext } from "./ArcaeaFileFormatParser";
import { ValuesContext } from "./ArcaeaFileFormatParser";
import { EventContext } from "./ArcaeaFileFormatParser";
import { ItemContext } from "./ArcaeaFileFormatParser";
import { SubeventsContext } from "./ArcaeaFileFormatParser";
import { SegmentContext } from "./ArcaeaFileFormatParser";
import { BodyContext } from "./ArcaeaFileFormatParser";
import { FileContext } from "./ArcaeaFileFormatParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ArcaeaFileFormatParser`.
 */
export interface ArcaeaFileFormatListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ArcaeaFileFormatParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `ArcaeaFileFormatParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `ArcaeaFileFormatParser.values`.
	 * @param ctx the parse tree
	 */
	enterValues?: (ctx: ValuesContext) => void;
	/**
	 * Exit a parse tree produced by `ArcaeaFileFormatParser.values`.
	 * @param ctx the parse tree
	 */
	exitValues?: (ctx: ValuesContext) => void;

	/**
	 * Enter a parse tree produced by `ArcaeaFileFormatParser.event`.
	 * @param ctx the parse tree
	 */
	enterEvent?: (ctx: EventContext) => void;
	/**
	 * Exit a parse tree produced by `ArcaeaFileFormatParser.event`.
	 * @param ctx the parse tree
	 */
	exitEvent?: (ctx: EventContext) => void;

	/**
	 * Enter a parse tree produced by `ArcaeaFileFormatParser.item`.
	 * @param ctx the parse tree
	 */
	enterItem?: (ctx: ItemContext) => void;
	/**
	 * Exit a parse tree produced by `ArcaeaFileFormatParser.item`.
	 * @param ctx the parse tree
	 */
	exitItem?: (ctx: ItemContext) => void;

	/**
	 * Enter a parse tree produced by `ArcaeaFileFormatParser.subevents`.
	 * @param ctx the parse tree
	 */
	enterSubevents?: (ctx: SubeventsContext) => void;
	/**
	 * Exit a parse tree produced by `ArcaeaFileFormatParser.subevents`.
	 * @param ctx the parse tree
	 */
	exitSubevents?: (ctx: SubeventsContext) => void;

	/**
	 * Enter a parse tree produced by `ArcaeaFileFormatParser.segment`.
	 * @param ctx the parse tree
	 */
	enterSegment?: (ctx: SegmentContext) => void;
	/**
	 * Exit a parse tree produced by `ArcaeaFileFormatParser.segment`.
	 * @param ctx the parse tree
	 */
	exitSegment?: (ctx: SegmentContext) => void;

	/**
	 * Enter a parse tree produced by `ArcaeaFileFormatParser.body`.
	 * @param ctx the parse tree
	 */
	enterBody?: (ctx: BodyContext) => void;
	/**
	 * Exit a parse tree produced by `ArcaeaFileFormatParser.body`.
	 * @param ctx the parse tree
	 */
	exitBody?: (ctx: BodyContext) => void;

	/**
	 * Enter a parse tree produced by `ArcaeaFileFormatParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `ArcaeaFileFormatParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;
}

