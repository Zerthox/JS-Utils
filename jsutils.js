// --------------------------------
// --- JS UTILS v0.1 by Zerthox ---
// --------------------------------
// Source: github.com/Zerthox/JS-Utils
// License: MIT

// Strings
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.replaceAll = function(s = "", r = "") {
	return this.split(s).join(r);
};

String.prototype.remove = function(i = 0) {
	if (typeof i === "number") {
		if (i === 0) return this.toString();
    	else return this.slice(0, i - 1) + this.slice(i);
	}
	else return this.split(i).join("");
};

String.prototype.get = function(i = undefined) {
	if (typeof i === "undefined") return this.toString();
	else return this.slice(i).charAt(0);
};

String.prototype.classify = function() {
    return this.toLowerCase().replace(/ /g, "-");
};

// Arrays
Array.prototype.last = function(i = 0) {
    return this[this.length - i - 1];
};

Array.prototype.contains = function(s) {
	if (this.indexOf(s) > -1) return true;
	else return false;
};

Array.prototype.each = function(f) {
	if (f instanceof Function) {
		for (var i = 0; i < this.length; i++) {
			var v = this[i];
			f.call(v, i, v);
		}
	}
};

// Objects
Object.prototype.keys = function() {
	return Object.keys(this);
};

Object.prototype.contains = function(s) {
	var a = Object.keys(this).map(key => this[key]);
	if (this.hasOwnProperty(s) || a.indexOf(s) > -1) return true;
	else return false;
};

Object.prototype.containsValue = function(s) {
	var a = Object.keys(this).map(key => this[key]);
	if (a.indexOf(s) > -1) return true;
	else return false;
};

Object.prototype.find = function(s) {
	var r = {}, a = Object.keys(this);
	for (var i = 0; i < a.length; i++) {
		var k = a[i], v = this[k];
		if (v === s) r[k] = v;
	}
	return r;
};

Object.prototype.findKeys = function(s) {
	var r = [], a = Object.keys(this);
	for (var i = 0; i < a.length; i++) {
		var k = a[i];
		if (this[k] === s) r.push(k);
	}
	return r;
};

Object.prototype.each = function(f) {
	if (f instanceof Function) {
		var a = Object.keys(this);
		for (var i = 0; i < a.length; i++) {
			var k = a[i], v = this[a[i]];
			f.call(v, k, v);
		}
	}
};

// --------------------------------