// --------------------------------
// --- JS UTILS v0.5 by Zerthox ---
// --------------------------------
// Source: github.com/Zerthox/JS-Utils
// License: MIT

// Numbers
Object.defineProperty(Number.prototype, "cap", {
	value: function(max) {
	    return Math.min(this, max);
	},
	configurable: true,
	enumberable: false
});

Object.defineProperty(Number.prototype, "range", {
	value: function(min, max) {
	    return Math.min(Math.max(this, min), max);
	},
	configurable: true,
	enumberable: false
});

// Strings
Object.defineProperty(String.prototype, "calc", {
	value: function() {
			if (!isNaN(parseFloat(this)) || this.startsWith("("))
				return new Function("return " + this.split("^").join("**"))();
	},
	configurable: true,
	enumberable: false
});

Object.defineProperty(String.prototype, "capitalize", {
	value: function() {
	    return this.charAt(0).toUpperCase() + this.slice(1);
	},
	configurable: true,
	enumberable: false
});

Object.defineProperty(String.prototype, "capitalizeAll", {
	value: function() {
		return this.split(/ /g).map(v => v.charAt(0).toUpperCase() + v.slice(1)).join(" ");
	},
	configurable: true,
	enumberable: false
});

Object.defineProperty(String.prototype, "replaceAll", {
	value: function(s = "", r = "") {
		return this.split(s).join(r);
	},
	configurable: true,
	enumberable: false
});

Object.defineProperty(String.prototype, "remove", {
	value: function(i = 0) {
		if (typeof i === "number") {
			if (i === 0) return this.toString();
	    	else return this.slice(0, i - 1) + this.slice(i);
		}
		else return this.split(i).join("");
	},
	configurable: true,
	enumberable: false
});

Object.defineProperty(String.prototype, "get", {
	value: function(i = undefined) {
		if (typeof i === "undefined") return this.toString();
		else return this.slice(i).charAt(0);
	},
	configurable: true,
	enumberable: false
});

Object.defineProperty(String.prototype, "classify", {
	value: function() {
	    return this.toLowerCase().replace(/ /g, "-");
	},
	configurable: true,
	enumberable: false
});

// Arrays
Object.defineProperty(Array.prototype, "last", {
	value: function(i = 0) {
	    return this[this.length - i - 1];
	},
	configurable: true,
	enumberable: false
});

Object.defineProperty(Array.prototype, "contains", {
	value: function(s) {
		if (this.indexOf(s) > -1) return true;
		else return false;
	},
	configurable: true,
	enumberable: false
});

Object.defineProperty(Array.prototype, "each", {
	value: function(f) {
		if (f instanceof Function) {
			this.map(function(v, i) {
				f.call(v, i, v);
			});
		}
	},
	configurable: true,
	enumberable: false
});

// Objects
Object.defineProperty(Object.prototype, "keys", {
	value: function() {
		return Object.keys(this);
	},
	configurable: true,
	enumberable: false
});

Object.defineProperty(Object.prototype, "contains", {
	value: function(s) {
		var a = Object.keys(this).map(key => this[key]);
		if (this.hasOwnProperty(s) || a.indexOf(s) > -1) return true;
		else return false;
	},
	configurable: true,
	enumberable: false
});

Object.defineProperty(Object.prototype, "containsValue", {
	value: function(s) {
		var a = Object.keys(this).map(key => this[key]);
		if (a.indexOf(s) > -1) return true;
		else return false;
	},
	configurable: true,
	enumberable: false
});

Object.defineProperty(Object.prototype, "find", {
	value: function(s) {
		var r = {}, a = Object.keys(this);
		for (var i = 0; i < a.length; i++) {
			var k = a[i], v = this[k];
			if (v === s) r[k] = v;
		}
		return r;
	},
	configurable: true,
	enumberable: false
});

Object.defineProperty(Object.prototype, "findKeys", {
	value: function(s) {
		var r = [], a = Object.keys(this);
		for (var i = 0; i < a.length; i++) {
			var k = a[i];
			if (this[k] === s) r.push(k);
		}
		return r;
	},
	configurable: true,
	enumberable: false
});

Object.defineProperty(Object.prototype, "each", {
	value: function(f) {
		if (f instanceof Function) {
			var a = Object.keys(this);
			for (var i = 0; i < a.length; i++) {
				var k = a[i], v = this[k];
				f.call(v, k, v);
			}
		}
	},
	configurable: true,
	enumberable: false
});

// Math functions
Object.defineProperty(Math, "factorial", {
	value: function(n) {
	    for (i = n; i > 1; i--) {
	    	n *= i - 1;
	    }
	    return n;
	},
	configurable: true,
	enumberable: false
});
Object.defineProperty(Math, "fact", {
	value: Math.factorial,
	configurable: true,
	enumberable: false
});
Object.defineProperty(Math, "factit", {
	value: Math.factorial,
	configurable: true,
	enumberable: false
});

Object.defineProperty(Math, "factorialrec", {
	value: function(n) {
	    if (n > 0)
	    	return n * Math.factrec(n - 1);
	    else
	    	return 1;
	},
	configurable: true,
	enumberable: false
});
Object.defineProperty(Math, "factrec", {
	value: Math.factorialrec,
	configurable: true,
	enumberable: false
});

// --------------------------------