// --------------------------------
// --- JS UTILS v0.1 by Zerthox ---
// --------------------------------
// Source: github.com/Zerthox/JS-Utils
// License: MIT

// Strings
Object.defineProperty(String.prototype, "capitalize", {
	value: function() {
	    return this.charAt(0).toUpperCase() + this.slice(1);
	},
	enumberable: false
});

Object.defineProperty(String.prototype, "replaceAll", {
	value: function(s = "", r = "") {
		return this.split(s).join(r);
	},
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
	enumberable: false
});

Object.defineProperty(String.prototype, "get", {
	value: function(i = undefined) {
		if (typeof i === "undefined") return this.toString();
		else return this.slice(i).charAt(0);
	},
	enumberable: false
});

Object.defineProperty(String.prototype, "classify", {
	value: function() {
	    return this.toLowerCase().replace(/ /g, "-");
	},
	enumberable: false
});

// Arrays
Object.defineProperty(Array.prototype, "last", {
	value: function(i = 0) {
	    return this[this.length - i - 1];
	},
	enumberable: false
});

Object.defineProperty(Array.prototype, "contains", {
	value: function(s) {
		if (this.indexOf(s) > -1) return true;
		else return false;
	},
	enumberable: false
});

Object.defineProperty(Array.prototype, "each", {
	value: function(f) {
		if (f instanceof Function) {
			for (var i = 0; i < this.length; i++) {
				var v = this[i];
				f.call(v, i, v);
			}
		}
	},
	enumberable: false
});

// Objects
Object.defineProperty(Object.prototype, "keys", {
	value: function() {
		return Object.keys(this);
	},
	enumberable: false
});

Object.defineProperty(Object.prototype, "contains", {
	value: function(s) {
		var a = Object.keys(this).map(key => this[key]);
		if (this.hasOwnProperty(s) || a.indexOf(s) > -1) return true;
		else return false;
	},
	enumberable: false
});

Object.defineProperty(Object.prototype, "containsValue", {
	value: function(s) {
		var a = Object.keys(this).map(key => this[key]);
		if (a.indexOf(s) > -1) return true;
		else return false;
	},
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
	enumberable: false
});

Object.defineProperty(Object.prototype, "each", {
	value: function(f) {
		if (f instanceof Function) {
			var a = Object.keys(this);
			for (var i = 0; i < a.length; i++) {
				var k = a[i], v = this[a[i]];
				f.call(v, k, v);
			}
		}
	},
	enumberable: false
});

// --------------------------------