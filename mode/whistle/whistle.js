CodeMirror.defineSimpleMode("whistle", {
	"start": [
		{
			"regex": /"(?:[^\\]|\\.)*?(?:"|$)/,
			"token": "string"
		},
		{
			"regex": /'.?'/,
			"token": "string"
		},
		{
			"regex": /(?:function|var|val|return|if|for|while|else|loop|break|export|import|from|type)\b/,
			"token": "keyword"
		},
		{
			"regex": /(?:true|false|none)\b/,
			"token": "atom"
		},
		{
			"regex": /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i,
			"token": "number"
		},
		{
			"regex": /\/\/.*/,
			"token": "comment"
		},
		{
			"regex": /\/\*/,
			"token": "comment",
			"next": "comment"
		},
		{
			"regex": /[-+\/*=<>!]+/,
			"token": "operator"
		},
		{
			"regex": /:(\s*)(i32|i64|f32|f64|string|char|bool|none)/,
			"token": "type"
		},
		{
			"regex": /[\{\[\(]/,
			"indent": true
		},
		{
			"regex": /[\}\]\)]/,
			"dedent": true
		}
	],
	"comment": [
		{
			"regex": /.*?\*\//,
			"token": "comment",
			"next": "start"
		},
		{
			"regex": /.*/,
			"token": "comment"
		}
	],
	"meta": {
		"dontIndentStates": ["comment"],
		"lineComment": "//"
	}
});
