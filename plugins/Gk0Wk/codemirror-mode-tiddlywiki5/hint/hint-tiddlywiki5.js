(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict";e.defineInitHook(function(e){e.options.hintOptions={completeSingle:!1},e.on("change",function(e,i){e.state.completeActive||"function"!=typeof e.showHint||e.showHint()})}),e.registerHelper("hint","tiddlywiki5",function(i){for(var t=i.getCursor(),r=i.getLine(t.line),o=t.ch,n=t.ch,l=30,s=[".","]","}",">"],c=["[","{","|",'"'];o;){var f=r.charAt(o-1);if(n-o>l||s.includes(f))return null;if(c.includes(f))break;o--}if(0==o)return null;var d=o!==n&&r.slice(o,n);return"$"==r.charAt(o)?{list:$tw.wiki.filterTiddlers(`[all[tiddlers]search:title:literal[${d}]!prefix[$:/state]]`),from:e.Pos(t.line,o),to:e.Pos(t.line,n)}:{list:$tw.wiki.filterTiddlers(`[all[tiddlers]!is[system]!is[shadow]search:title:literal[${d}]!prefix[$:/state]]`),from:e.Pos(t.line,o),to:e.Pos(t.line,n)}})});