const _async = (fn, cb) => {
	setTimeout(() => cb(fn()), Math.random() * 500);
}

const a = Symbol();

function Folder(x = []) {
	if (!new.target) {
		return new Folder(x);
	}

	this[a] = x;
}

Folder.prototype.read = function(index, cb) {
	if (typeof index !== "number") {
		throw new Error("Callback should be a function");
	}
	if (typeof cb !== "function") {
		throw new Error("Index should be a number");
	}
	_async(() => this[a][index], cb);
}

Folder.prototype.size = function(cb) {
	if (typeof cb !== "function") {
		throw new Error("Callback should be a function");
	}
	_async(() => this[a].length, cb);
}

module.exports = Folder;
