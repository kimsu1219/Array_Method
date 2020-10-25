// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//음수 index => 양수index
var negativeTopositive = function negativeTopositive(totalNum, index) {
  var absIndex = Math.abs(index);
  var newIndex;

  if (absIndex > totalNum) {
    newIndex = totalNum - (absIndex - Math.floor(absIndex / totalNum) * totalNum);
  } else {
    newIndex = totalNum + index;
  }

  return newIndex;
}; //array.from 반복


var arrayFrom = function arrayFrom(obj) {
  var f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (x) {
    return x;
  };
  var newArr = [];

  for (var i = 0; i < obj.length; i++) {
    newArr[i] = f(obj[i], i);
  }

  return newArr;
}; // console.log(Array.from({length: 5}, (v, i) => i))
// console.log(arrayFrom({length: 5}, (v, i) => i))
// console.log(arrayFrom('foo'))
// console.log(arrayFrom([1,2,3],x=>x+2))
//array.from 재귀


var arrayFromRec = function arrayFromRec(obj) {
  var f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (x) {
    return x;
  };

  var run = function run(acc, obj, i, f) {
    if (i === obj.length) return acc;
    var targetItem = f(obj[i], i);
    return run([].concat(_toConsumableArray(acc), [targetItem]), obj, i + 1, f);
  };

  return run([], obj, 0, f);
}; //array.isarray


var arrayIsArray = function arrayIsArray(obj) {
  var objToStr = Object.prototype.toString; // console.log(objToStr.call(obj))

  return objToStr.call(obj) === '[object Array]';
}; // console.log(arrayIsArray('foo'))
// console.log(Array.isArray('foo'))
//array.of


var arrayOf = function arrayOf() {
  var newArr = [];

  for (var i = 0; i < arguments.length; i++) {
    newArr[i] = i < 0 || arguments.length <= i ? undefined : arguments[i];
  }

  return newArr;
}; //array.of 재귀


var arrayOfRe = function arrayOfRe() {
  var run = function run(arr, i) {
    for (var _len2 = arguments.length, ele = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      ele[_key2 - 2] = arguments[_key2];
    }

    if (i === ele.length) return;
    arr[i] = ele[i];
    i++;
    run.apply(void 0, [arr, i].concat(ele));
    return arr;
  };

  for (var _len = arguments.length, ele = new Array(_len), _key = 0; _key < _len; _key++) {
    ele[_key] = arguments[_key];
  }

  return run.apply(void 0, [[], 0].concat(ele));
};

var arrayOfRec = function arrayOfRec() {
  for (var _len3 = arguments.length, els = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    els[_key3] = arguments[_key3];
  }

  return els.length ? [els[0]].concat(_toConsumableArray(arrayOfRec.apply(void 0, _toConsumableArray(els.slice(1))))) : [];
}; // console.log(arrayOfRe(1,2,3))
// console.log(arrayOfRe(undefined))
// console.log(arrayOf(7))
// console.log(Array.of(7))
//array.concat


var arrayConcat = function arrayConcat(arr) {
  for (var _len4 = arguments.length, val = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    val[_key4 - 1] = arguments[_key4];
  }

  var addArr = [];
  if (!val[0]) val = arr;

  for (var i = 0; i < val.length; i++) {
    if (!Array.isArray(val[i])) addArr = [].concat(_toConsumableArray(addArr), [val[i]]);else {
      addArr = [].concat(_toConsumableArray(addArr), _toConsumableArray(val[i]));
    }
  }

  arr.push.apply(arr, _toConsumableArray(addArr)); // const newArr = [...arr, ...addArr] // 필요없음

  return arr;
}; // console.log(arrayConcat([1,2,3],'a','b','c'))
// console.log(arrayConcat(['a','b','c'],[4,5,6],'str'))
//array.concat 재귀
// const arrayConcatRe = (arrRe, ...val) => {
//   // let addArr = [] // run 함수만 있어야 함
//   const run =(empty, arr,i)=>{
//     if(i === val.length) return
//     if(!Array.isArray(val[i])) arr.push(val[i])
//     else {
//       arr.push(...val[i])
//     }
//     empty = arr
//     i++
//     run(empty, arr,i)
//     return [...arrRe, ...empty]
//   }
//   return run([], [], 0)
// }


var arrayConcatRe = function arrayConcatRe(arrRe) {
  var run = function run() {
    var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (val.length === 0) return arr;
    return [].concat(_toConsumableArray(arr), _toConsumableArray(Array.isArray(val[0]) ? [].concat(_toConsumableArray(val[0]), [run(val.slice(1))]) : [val[0], run(val.slice(1))]));
  };

  for (var _len5 = arguments.length, val = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    val[_key5 - 1] = arguments[_key5];
  }

  return run(val, arrRe);
}; // console.log(arrayConcatRe([1,2,3],'str'))


var arrConcatRec2 = function arrConcatRec2(arr) {
  var run = function run(arr, args) {
    if (!args.length) return arr;
    var target = args[0];
    var computedTarget = Array.isArray(target) ? target : [target];
    return run([].concat(_toConsumableArray(arr), _toConsumableArray(computedTarget)), args.slice(1));
  };

  for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    args[_key6 - 1] = arguments[_key6];
  }

  return run(arr, args);
};

console.log(arrConcatRec2([1, 2, 3], ['a', 'b', 'c'], [4, 5, 6], 'str'));

var arrConcatRec3 = function arrConcatRec3(arr) {
  var run = function run(arr, args) {
    if (!args.length) return [];
    var target = args[0];
    var computedTarget = Array.isArray(target) ? target : [target];
    return [].concat(_toConsumableArray(arr), _toConsumableArray(computedTarget), _toConsumableArray(run([], args.slice(1))));
  };

  for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  return run(arr, args);
}; //array.copyWithin


var arrcopywithin = function arrcopywithin(arr, target) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : arr.length;
  if (target < 0) target = negativeTopositive(arr.length, target);
  if (start < 0) start = negativeTopositive(arr.length, start);
  if (end < 0) end = negativeTopositive(arr.length, end);
  var newArr = [];
  var copyArr = [];

  for (var i = start; i < end; i++) {
    copyArr = [].concat(_toConsumableArray(copyArr), [arr[i]]);
  }

  for (var _i = 0; _i < copyArr.length; _i++) {
    newArr[target + _i] = copyArr[_i];
  }

  for (var _i2 = 0; _i2 < arr.length; _i2++) {
    if (!newArr[_i2]) newArr[_i2] = arr[_i2];
  }

  return newArr;
}; // console.log(arrcopywithin([1,2,3,4,5],0,-2))
// console.log([1,2,3,4,5].copyWithin(0,-2))


var arrcopywithinRe = function arrcopywithinRe(arr, target) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : arr.length;
  if (target < 0) target = negativeTopositive(arr.length, target);
  if (start < 0) start = negativeTopositive(arr.length, start);
  if (end < 0) end = negativeTopositive(arr.length, end);
  var copyArr = [];

  for (var i = start; i < end; i++) {
    copyArr = [].concat(_toConsumableArray(copyArr), [arr[i]]);
  }

  var run = function run(i, newArr) {
    if (i === arr.length) return; // newArr[i] = arr[i]

    if (i < target || i > target + copyArr.length - 1) {
      newArr[i] = arr[i];
    } else {
      for (var _i3 = 0; _i3 < copyArr.length; _i3++) {
        newArr[target + _i3] = copyArr[_i3];
      }
    }

    i++;
    run(i, newArr); // arr = newArr

    return newArr;
  };

  return run(0, []);
}; //array.fill


var arrayFill = function arrayFill(arr, val) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : arr.length;
  if (start < 0) start = negativeTopositive(arr.length, start);
  if (end < 0) end = negativeTopositive(arr.length, end); // let newArr = []

  for (var i = start; i < end; i++) {
    arr[i] = val;
  }

  return arr;
}; //array.fill 재귀


var arrayFillRe = function arrayFillRe(arr, val) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : arr.length;

  var run = function run(val) {
    var runArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var i = arguments.length > 2 ? arguments[2] : undefined;
    var start = arguments.length > 3 ? arguments[3] : undefined;
    var end = arguments.length > 4 ? arguments[4] : undefined;
    // if(start>=arr.length || start === end) {
    //   return arr
    // }
    // if(i>=start || i< end) {
    //   arr[i] = val
    //   newArr = arr
    // }
    // return arr
    // i++
    // run(i)
    // return [...newArr]
    if (i === arr.length) return;
    return (i >= start && i < end ? [val] : [arr[i]]).concat(run(val, arr, i + 1, start, end));
  };

  return run(val, arr, 0, start, end);
}; // console.log(arrayFillRe([1,2,3],4))


var arrayFillRec2 = function arrayFillRec2(arr, val) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : arr.length;

  var run = function run(i, runArr, resultArr) {
    if (i === runArr.length) return resultArr;
    var computedValue = i >= start && i < end ? val : runArr[i]; // console.log(computedValue)

    resultArr.push(computedValue);
    return run(i + 1, runArr, resultArr); // return [...computedValue].concat(run(i+1, arr))
  };

  return run(0, arr, []);
};

console.log(arrayFillRec2([1, 2, 3], 4)); // console.log(arrayFillRec2([1,2,3],4,1,1))
//array.filter

var arrayFilter = function arrayFilter(arr, f) {
  var newArr = [];

  var _iterator = _createForOfIteratorHelper(arr),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var i = _step.value;
      if (f(i)) newArr.push(i);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return newArr;
}; // console.log(arrayFilter([1,2,3,4,5,6],test => test>5))
//array.filter 재귀


var arrayFilterRe = function arrayFilterRe(arr, f) {
  var run = function run() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (arr.length === 0) return; // if(i===arr.length) return
    // if(f(arr[i])) newArr.push(arr[i])
    // i++
    // run(i,newArr)
    // return (f(arr[i]) ? [...arr[0], ...run(arr.slice(1))] : [...run(arr.slice(1))] )

    return f(arr[0]) ? [arr[0], run(arr.slice(1))] : run(arr.slice(1));
  };

  return run(arr);
};

var arrayFilterRec2 = function arrayFilterRec2(arr, f) {
  var run = function run() {
    var runArr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (!runArr.length) return;
    var target = runArr[0];
    return f(target) ? [target, run(runArr.slice(1))] : run(runArr.slice(1));
  };

  return run(arr);
}; // const arrFilterRec = (arr, f) => f(arr[0]) && arr.length ? [arr[0], arrFilterRec(arr.slice(1), f)] : arrFilterRec(arr.slice(1), f) 


var arrayFilterRec3 = function arrayFilterRec3(arr, f) {
  var run = function run(runArr, resultArr, f) {
    if (!runArr.length) return resultArr; //  resultArr.push(runArr[0])  
    // return run(runArr.slice(1), resultArr, f)

    return run(runArr.slice(1), f(runArr[0]) ? [].concat(_toConsumableArray(resultArr), [runArr[0]]) : _toConsumableArray(resultArr), f);
  };

  return run(arr, [], f);
};

console.log(arrayFilterRec3(['a', 'aa', 'aaa'], function (test) {
  return test.length == 3;
})); // const arrflatRec = (arr) => {
//   const run = (runArr, newArr=[]) =>{
//     if(!runArr.length) return newArr
//     const computedValue = Array.isArray(runArr[0]) ? runArr[0] : [runArr[0]]
//     newArr.push(...computedValue)
//     return run(runArr.slice(1),newArr)
//   }
//   return run(arr, [])
// }
// const arrConcatRec2 = (arr, ...args) => {
//   const run = (arr, args) => {
//     if (!args.length) return arr;
//     const target = args[0];
//     const computedTarget = Array.isArray(target) ? target : [target];
//     return run([...arr, ...computedTarget], args.slice(1));
//   };
//   return run(arr, args)
// };
//array.find 

var arrayFind = function arrayFind(arr, f) {
  var _iterator2 = _createForOfIteratorHelper(arr),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var i = _step2.value;
      if (f(i)) return i;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}; // console.log(arrayFind([2,4,3],el=>el>2))
//array.find 재귀


var arrayFindRe = function arrayFindRe(arr, f) {
  var run = function run() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (arr.length === 0) return;
    return f(arr[0]) ? arr[0] : run(arr.slice(1));
  };

  return run(arr);
};

console.log('find: ' + arrayFindRe(['a', 'aa', 'aaa'], function (el) {
  return el === 'aa';
})); //array.findIndex

var arrayFindIndex = function arrayFindIndex(arr, f) {
  var index = -1;

  for (var i = 0; i < arr.length; i++) {
    if (f(arr[i])) {
      index = i;
      break;
    }
  }

  return index;
}; // console.log(arrayFindIndex(['a','aa','aaa', 'aa'],el=>el==='aaaa'))
//array.findeIndex 재귀


var arrayFindIndexRe = function arrayFindIndexRe(arr, f) {
  var run = function run(i) {
    var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var f = arguments.length > 2 ? arguments[2] : undefined;
    if (i === arr.length) return -1;
    return f(arr[i]) ? i : run(i + 1, arr, f);
  };

  return run(0, arr, f);
};

console.log('findIdx: ' + arrayFindIndexRe(['a', 'aa', 'aaa', 'aa'], function (el) {
  return el.length > 2;
})); //arrayflat loop 다시
// class ArrayFlatStruct {
//   static create(v) {
//     return new this(v);
//   }
//   constructor({depth = 1, val, index = null} = {}) {
//     this.depth = depth;
//     this.val = val;
//     this.index = index;
//   }
// }
// const arrayFlat = (arr, depth=1) => {
//   let loop = 0
//   // const cutArr = []
//   // const newArr = []
//   const stack = arr.map((val) => ArrayFlatStruct.create({val}))
//   const resultArr = []
//   let idx = 0;
//   while(stack.length) {
//     idx++
//     const target = stack.shift()
//     if(!target) return 
//     if (target.depth > depth) return 
//     if(Array.isArray(target.val)) {
//       stack.push(...target.val.map(target=>{
//         return ArrayFlatStruct.create({
//           depth: target.depth+1,
//           val: target.val,
//           index: idx
//         })
//       }))
//     }
//     else {
//       resultArr.push(target)
//     }
//   }
// const flat = (arr, depth = 1) => {
//   const stack = [...arr];
//   const result = [];
//   while (stack.length) {
//     const current = stack.shift();
//     if (Array.isArray(current)) {
//       stack.unshift(...current);
//     } else {
//       result.push(current);
//     }
//   }
// }
// while(loop < depth) { //기준을 배열로
//   for(const i of arr) {
//     if(Array.isArray(i)) {
//       cutArr.push(i)
//     }
//     else {
//       newArr.push(i)
//     }
//   }
//   arr = newArr.concat(...cutArr)
//   loop++
// }
// return arr
// }
// console.log(arrayFlat([1,2,[3,4,[5]]],Infinity))
// console.log(arrayFlat([[1,2],[3,4]]))
//array.flat 재귀

var arrayFlatRe = function arrayFlatRe(arr) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var run = function run() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (arr.length === 0) return; // if(Array.isArray(arr[i])) cutArr.push(arr[i])
    // else {
    //   newArr.push(arr[i])
    // }
    // // console.log(cutArr)
    // // console.log(newArr)
    // i++
    // run(newArr, cutArr, i)
    // newArr = newArr.concat(...cutArr)
    // // console.log([...newArr])
    // return [...newArr]
    // console.log(arr)
    // return Array.isArray(arr[0]) ? [...arr[0], run(arr.slice(1))] : [arr[0], ...run(arr.slice(1))]
    // return Array.isArray(arr[0]) ? [...arr[0]] : [arr[0]]

    return (Array.isArray(arr[0]) ? _toConsumableArray(arr[0]) : [arr[0]]).concat(run(arr.slice(1)));
  };

  return run(arr);
}; // console.log(arrayFlatRe([1,2,[3,4,[5]]]))
// console.log(arrayFlatRe([[1,2],[3,4]]))


var arrflatRec2 = function arrflatRec2(arr) {
  var run = function run(runArr) {
    var newArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (!runArr.length) return newArr;
    var computedValue = Array.isArray(runArr[0]) ? runArr[0] : [runArr[0]]; // return (run([...computedValue], runArr.slice(1)))

    return run(runArr.slice(1), newArr.push.apply(newArr, _toConsumableArray(computedValue)));
  };

  return run(arr);
}; // console.log(arrflatRec2([1,2,[3,4,[5]]]))


var arrflatRec3 = function arrflatRec3(arr) {
  var run = function run(runArr) {
    var newArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (!runArr.length) return newArr;
    var computedValue = Array.isArray(runArr[0]) ? runArr[0] : [runArr[0]];
    newArr.push.apply(newArr, _toConsumableArray(computedValue));
    return run(runArr.slice(1), newArr);
  };

  return run(arr, []);
}; // console.log(arrflatRec3([1,2,[3,4,[5]]]))
// const arrflatRec4 = (arr, depth = 1) => {
//   const run = (runArr, newArr=[], depth) => {
//     if(!runArr.length) return newArr
//     const loop = (depth) => {
//       if(depth === 0) return newArr
//       const computedValue = Array.isArray(runArr[0]) ? runArr[0] : [runArr[0]]
//       newArr.push(...computedValue)
//       // console.log(newArr)
//       runArr = newArr
//       depth -- 
//       loop(depth)
//     }
//     loop(depth)
//     // return run(runArr.slice(1),newArr)
//   }
//   return run(arr, [], depth)
// }


var arrflatRec4 = function arrflatRec4(arr) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var run = function run(i, arr) {
    var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : depth;
    var newArr = arguments.length > 3 ? arguments[3] : undefined;

    if (i === arr.length) {
      if (depth > 1) {
        // console.log('loop')
        return run(0, newArr, depth - 1, []);
      } else {
        return newArr;
      }
    }

    var computedValue = Array.isArray(arr[i]) ? arr[i] : [arr[i]];
    newArr.push.apply(newArr, _toConsumableArray(computedValue)); // console.log(newArr)

    return run(i + 1, arr, depth, newArr);
  };

  return run(0, arr, depth, []);
}; // console.log(arrflatRec4([1,[2,3],4,[5]],Infinity))
// console.log(arrflatRec4([1,2,[3,4,[5]]],2))
// console.log(arrflatRec4([1,2,[3,4,[5,[6]]]], 3))
//array.flatMap


var arrayFlatMap = function arrayFlatMap(arr, f) {
  var newArr = [];

  var _iterator3 = _createForOfIteratorHelper(arr),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var i = _step3.value;
      newArr.push(f(i));
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return newArr.flat(); // console.log(newArr)
}; // console.log(arrayFlatMap([1,2,3,4], x => [x*2]))
//array.flatMap 재귀


var arrayFlatMapRe = function arrayFlatMapRe(arr, f) {
  var run = function run() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (arr.length === 0) return; // newArr.push(f(arr[i]))
    // i++
    // run(i, newArr)
    // // console.log(newArr.flat())
    // return newArr.flat()

    return (Array.isArray(f(arr[0])) ? _toConsumableArray(f(arr[0])) : [f(arr[0])]).concat(run(arr.slice(1)));
  };

  return run(arr);
}; // console.log(arrayFlatMapRe([1,2,3,4], x=>[x+2]))


var arrayFlatMapRec2 = function arrayFlatMapRec2(arr, f) {
  var run = function run(arr, f) {
    if (!arr.length) return [];
    var target = arr[0];
    var computedTarget = Array.isArray(target) ? target : [target];
    return [].concat(_toConsumableArray(f.apply(void 0, _toConsumableArray(computedTarget))), _toConsumableArray(run(arr.slice(1), f)));
  };

  return run(arr, f);
};

console.log(arrayFlatMapRec2([1, 2, 3, 4], function (x) {
  return [x + 2];
})); //array.foreach

var arrayForeach = function arrayForeach(arr, f) {
  for (var i = 0; i < arr.length; i++) {
    f(arr[i]);
  }
}; // console.log(arrayForeach([1,2,3,4], x=>x+1))
//array.foreach 재귀
// const arrayForeachRe = (arr,f) => {
//   const run = (arr=[]) => {
//     // if(i === arr.length) return
//     // f(arr[i])
//     // i++
//     return f() 
//   }
//   return run(arr)
// }


var arrayForeachRec = function arrayForeachRec(arr, f) {
  return arr.length ? (f(arr[0]), arrayForeach(arr.slice(1), f)) : null;
}; // console.log(arrayForeachRec([1,2,3,4], x=>x+1))
//array.include


var arrayInclude = function arrayInclude(arr, value) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (start < 0) start = negativeTopositive(start);
  var result;

  for (var i = start; i < arr.length; i++) {
    if (arr[i] === value) {
      result = true;
      break;
    } else {
      result = false;
    }
  }

  return result;
}; // console.log(arrayInclude([1,2,3],4))
//array.indclude 재귀


var arrayIncludeRe = function arrayIncludeRe(arr, value) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var run = function run() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (arr.length === 0) return false;
    return arr[0] === value ? true : run(arr.splice(1));
  };

  return run(arr);
};

console.log(arrayIncludeRe([1, 2, 3], 4)); //array.indexOf

var arrayIndexof = function arrayIndexof(arr, eleToFind) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var index = -1;
  if (start < 0) start = negativeTopositive(start);

  for (var i = start; i < arr.length; i++) {
    if (arr[i] === eleToFind) {
      // console.log(i)
      index = i;
      break;
    }
  }

  return index;
}; // console.log(arrayIndexof([1,2,3],4))
//array.indexOf 재귀


var arrayIndexofRe = function arrayIndexofRe(arr, eleToFind) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var run = function run(i) {
    var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (i === arr.length) return -1; // if(arr[i] === eleToFind) {
    //   result = i
    //   return result
    // }
    // else {
    //   i++
    //   return run(i)
    // }

    return arr[i] === eleToFind ? i : run(i + 1, arr);
  };

  return run(0, arr);
};

console.log(arrayIndexofRe([1, 2, 3], 4)); //array.join

var arrayJoin = function arrayJoin(arr) {
  var seperator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
  var str;
  var result = '';

  for (var i = 0; i < arr.length; i++) {
    if (i == 0) str = arr[i].toString();else {
      str = seperator + arr[i].toString();
    }
    result += str;
  }

  return result;
}; // console.log(arrayJoin(['a','b','c','d']))
// console.log(arrayjoin([1,2,3,4]))
//array.join() 재귀


var arrayJoinRe = function arrayJoinRe(arr) {
  var seperator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';

  var run = function run(i) {
    var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (arr.length === 0) return ""; // console.log(arr)
    // console.log(arr[0].toString())
    // if(i == 0) result = arr[i].toString()
    // else {
    //   str = seperator + arr[i].toString()
    // }
    // result += str
    // i++
    // console.log(result)
    // return result + run(i,str, result) 

    return (i === 0 ? '' : seperator) + arr[0].toString() + run(i + 1, arr.slice(1));
  };

  return run(0, arr);
};

console.log(arrayJoinRe(['a', 'b', 'c', 'd'])); //array.map

var arrayMap = function arrayMap(arr, f) {
  var newArr = [];

  var _iterator4 = _createForOfIteratorHelper(arr),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var i = _step4.value;
      newArr.push(f(i));
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return newArr;
}; // console.log(arrayMap([1,2,3,4], x=>x+2))


var arrayMapRe = function arrayMapRe(arr, f) {
  var run = function run() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (arr.length === 0) return; // newArr.push(f(arr[i]))
    // i++
    // run(i, newArr)
    // return newArr

    return [f(arr[0])].concat(run(arr.slice(1)));
  };

  return run(arr);
}; // console.log(arrayMapRe([1,2,3,4], x=>x+2))
// console.log(arrayMapRe([1,2,3,4], x=>x*2))


var arrayMapRec2 = function arrayMapRec2(arr, f) {
  var run = function run(arr, f) {
    if (!arr.length) return [];
    return [f(arr[0])].concat(_toConsumableArray(run(arr.slice(1), f)));
  };

  return run(arr, f);
};

console.log(arrayMapRec2([1, 2, 3, 4], function (x) {
  return x * 2;
})); //array.pop

var arrayPop = function arrayPop(arr) {
  var resultArr = [];
  var oldArr = [];
  resultArr.push(arr[arr.length - 1]);

  for (var i = 0; i < arr.length - 1; i++) {
    oldArr.push(arr[i]);
  }

  arr = [].concat(oldArr); // console.log(arr)

  return resultArr;
}; // console.log(arrayPop([1,2,3,4]))


var arrayPop2 = function arrayPop2(arr) {
  var returnArr = arr[arr.length - 1];
  delete arr[arr.length - 1];
  arr.length = arr.length - 1;
  return [returnArr];
};

console.log(arrayPop2([1, 2, 3, 4, 5])); //array.pop 재귀

var arrayPopRe = function arrayPopRe(arr) {
  var run = function run() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    // resultArr.push(arr[arr.length-1])
    if (arr.length === 1) return; // originalArr.push(arr[i])
    // i++
    // run(i,[],originalArr)
    // arr = [...originalArr]
    // // console.log(arr)
    // return resultArr

    return [arr[0]].concat(run(arr.slice(1)));
  };

  return run(arr);
}; // console.log(arrayPopRe([1,2,3,4,5]))


var arrayPopRec2 = function arrayPopRec2(arr) {
  var run = function run(arr) {
    var newArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var returnArr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    if (!arr.length) return returnArr;
    arr.length === 1 ? returnArr.push(arr[0]) : newArr.push(arr[0]);
    return run(arr.slice(1), newArr, returnArr);
  };

  return run(arr, []);
}; // console.log(arrayPopRec2([1,2,3,4,5]))
// const arrayPopRec3 = (arr, i=0) => i === arr.length-1 ? (delete arr [i], arr.length = arr.length-1) : arrayPopRec3(arr, i+1) 
// const arrayPopRec3 = (arr) => {
//   const run = (arr, i) => {
//     const copyArr = [...arr]
//     if (i = arr.length) return [copyArr[copyArr.length-1]]
//     return run(i === arr.length - 2 ? ([], arr.length = arr.length-1 ): copyArr.splice(1))
//   }
//   return run(arr, 0)
// }


var arrayPopRec3 = function arrayPopRec3(arr) {
  var run = function run(arr, i, returnVal) {
    if (i === arr.length) {
      arr.length--;
      return returnVal;
    }

    if (i === arr.length - 1) returnVal = [arr[i]];
    return run(arr, i + 1, returnVal);
  };

  return run(arr, 0, 0);
};

var arrTest3 = [1, 2, 3, 4, 5];
console.log(arrayPopRec3(arrTest3));
console.log(arrTest3); //array.push

var arrayPush = function arrayPush(arr) {
  for (var _len8 = arguments.length, eles = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
    eles[_key8 - 1] = arguments[_key8];
  }

  // console.log(arr.length + eles.length)
  arr = arr.concat(eles);
  console.log(arr);
  return arr.length;
};

var arrayPush2 = function arrayPush2(arr) {
  var copyArr = _toConsumableArray(arr);

  arr.length = copyArr.length + (arguments.length <= 1 ? 0 : arguments.length - 1);

  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    arr[i + copyArr.length] = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
  } // console.log(arr)


  return arr.length;
};

console.log(arrayPush2([1, 2, 3], 'a', 'b', 'c')); // console.log(arrayPush([1,2,3],15))
//array.push 재귀

var arrayPushRe = function arrayPushRe(arr) {
  var run = function run() {
    var eleArr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    // if (eleArr.length === 0) return
    // arr = arr.concat(...eles[i])
    // i++
    // run(i)
    // return arr.length
    // return arr.concat(run(arr.slice(1)))
    return arr.concat(eleArr.length ? [eleArr[0]].concat(_toConsumableArray(run(eleArr.slice(1)))) : []); // return [...eleArr[0]].concat(run(eleArr.slice(1)))
  };

  for (var _len9 = arguments.length, eles = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
    eles[_key9 - 1] = arguments[_key9];
  }

  return run(eles);
}; // console.log(arrayPushRe([1,2,3],'a','b','c'))


var arrayPushRec = function arrayPushRec(arr) {
  for (var _len10 = arguments.length, els = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
    els[_key10 - 1] = arguments[_key10];
  }

  return els.length ? [].concat(_toConsumableArray(arr), [els[0]], _toConsumableArray(arrayPushRec.apply(void 0, _toConsumableArray(els.slice(1))))) : [];
};

console.log(arrayPushRec([1, 2, 3], 'a', 'b', 'c'));

var arrayPushRec2 = function arrayPushRec2(arr) {
  var run = function run(arr, args) {
    if (!args.length) return arr.length;else {
      arr.length += 1;
      arr[arr.length - 1] = args[0];
    } // const newArr = args.length ? (arr.length += 1, arr[arr.length-1] = args[0]): [...arr] //if문
    // console.log (arr)

    return run(arr, args.slice(1));
  };

  for (var _len11 = arguments.length, args = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
    args[_key11 - 1] = arguments[_key11];
  }

  return run(arr, args);
}; // const arrTest4 = [1,2,3]
// console.log(arrayPushRec2(arrTest4,'a','b','c'))
// console.log(arrTest4)
//array.reduce


var arrayReduce = function arrayReduce(arr, f) {
  var initialValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr[0];
  var accumulator = initialValue; // console.log(accumulator)

  for (var i = 0; i < arr.length; i++) {
    accumulator += f(arr[i]); // console.log(accumulator)
  }

  return accumulator;
}; // console.log(arrayReduce([0,1,2,3], x => -x, 15))
// console.log(arrayReduce([0,1,2,3], x => x))
//array.reduce 재귀


var arrayReduceRe = function arrayReduceRe(arr, f) {
  var initialValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr[0];

  var run = function run() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var accumulator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : initialValue;
    // if(arr.length === 0) return
    // accumulator += f(arr[i])
    // console.log(accumulator)
    // i++
    // run(i, accumulator)
    // return accumulator
    // console.log(f(arr[0]))
    return arr.length ? f(arr[0]) + run(arr.slice(1)) : accumulator;
  };

  return run(arr);
};

console.log(arrayReduceRe([0, 1, 2, 3], function (x) {
  return -x;
}, 15)); // console.log(arrayReduceRe([0,1,2,3], x => x))
// const arrReduceRec = (arr, f, initialValue = arr[0]) => (arr.length ? f(arr[0]) : initialValue) + arrReduceRec(arr)
//array.reduceRigth

var arrayReduceRight = function arrayReduceRight(arr, f) {
  var initialValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr[arr.length - 1];
  var previousValue = initialValue;

  for (var i = arr.length - 2; i >= 0; i--) {
    previousValue += f(arr[i]); // console.log(arr[i])
  }

  return previousValue;
}; // console.log(arrayReduceRight([1,2,3], x=> x))
//array.reduceRigth 재귀


var arrayReduceRightRe = function arrayReduceRightRe(arr, f) {
  var initialValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr[arr.length - 1];

  var run = function run() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var i = arguments.length > 1 ? arguments[1] : undefined;
    var previousValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : initialValue;
    // if(i === -1) return
    // console.log(arr[i])
    // previousValue += f(arr[i])
    // i--
    // run(i, previousValue)
    // return previousValue
    return arr.length ? f(arr[i]) + run(arr.pop(), i - 1) : previousValue; // return (i === 0 ? '' : seperator) + arr[0].toString() + run(i+1, arr.slice(1))
  };

  return run(arr, arr.length - 1);
};

console.log(arrayReduceRightRe([1, 2, 3], function (x) {
  return x;
})); //array.reverse

var arrayReverse = function arrayReverse(arr) {
  var resultArr = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    resultArr.push(arr[i]);
  }

  return resultArr;
}; // console.log(arrayReverse([1,2,3]))


var arrayReverse2 = function arrayReverse2(arr) {
  // const copyArr = [...arr]
  // for(let i = 0; i < arr.length; i++) {
  //   delete arr[i]
  //   arr.length = 0
  // }
  // for(let i = copyArr.length-1; i >= 0; i--) {
  //   arr[i] = copyArr[copyArr.length-1-i]
  //   // console.log(copyArr.length-1-i)
  // }
  for (var i = 0; i <= arr.length / 2 - 1; i++) {
    // const save = arr[i] 
    // arr[i] = arr[arr.length-i-1]
    // arr[arr.length-i-1] = save
    var _ref = [arr[arr.length - i - 1], arr[i]];
    arr[i] = _ref[0];
    arr[arr.length - i - 1] = _ref[1];
  } // console.log(arr)


  return arr;
};

console.log(arrayReverse2([1, 2, 3])); //array.reverse 재귀 

var arrayReverseRe = function arrayReverseRe(arr) {
  var run = function run() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var i = arguments.length > 1 ? arguments[1] : undefined;
    // if(i === -1) return
    //   resultArr.push(arr[i])
    //   i--
    //   run(i, resultArr)
    //   return resultArr
    // console.log(arr)
    return arr.length ? [arr[i]].concat(_toConsumableArray(run(arr.pop(), i - 1))) : [];
  };

  return run(arr, arr.length - 1);
};

var arrayReverseRec = function arrayReverseRec(arr) {
  return arr.length ? [].concat(_toConsumableArray(arrayReverseRec(arr.slice(1))), [arr[0]]) : [];
};

console.log(arrayReverseRec([1, 2, 3]));

var arrayReverseRec2 = function arrayReverseRec2(arr) {
  var run = function run(arr, i, copyArr) {
    if (i < 0) return arr = _toConsumableArray(copyArr);
    copyArr.push(arr[i]);
    delete arr[i];
    arr.length--; // arr[i] = copyArr[0]
    // console.log(arr[i], copyArr[0])

    return run(arr, i - 1, copyArr);
  };

  return run(arr, arr.length - 1, []);
};

var arrReverseRec3 = function arrReverseRec3(arr) {
  var run = function run(arr, i, save) {
    if (i > arr.length / 2 - 1) return arr;
    save = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = save; // [arr[i], arr[arr.length-i-1]] = [arr[arr.length-i-1], arr[i]]

    return run(arr, i + 1, save);
  };

  return run(arr, 0, 0);
};

var arrTest = [1, 2, 3];
console.log(arrReverseRec3(arrTest));
console.log(arrTest); //array.shift

var arrayShift = function arrayShift(arr) {
  var resultArr = [];

  for (var i = 1; i < arr.length; i++) {
    resultArr.push(arr[i]);
  }

  arr = [].concat(resultArr);
  return arr.length;
}; // console.log(arrayShift([1,2,3]))


var arrayShift2 = function arrayShift2(arr) {
  var copyArr = _toConsumableArray(arr);

  for (var i = 0; i < arr.length; i++) {
    delete arr[i];
    arr.length = arr.length - 1;
  }

  for (var _i4 = 1; _i4 < copyArr.length; _i4++) {
    arr[_i4 - 1] = copyArr[_i4];
  }

  return arr;
}; // console.log(arrayShift2([1,2,3]))


var arrayShift3 = function arrayShift3(arr) {
  var returnVal = arr[0];

  for (var i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }

  arr.length--;
  return [returnVal];
}; // const arrTest1 = [1, 2, 3]
// console.log(arrayShift3(arrTest1))
// console.log(arrTest1)
//array.shift 재귀


var arrayShiftRe = function arrayShiftRe(arr) {
  var run = function run(i, result) {
    if (i === arr.length) return;
    if (i > 0) result.push(arr[i]);
    i++;
    run(i, result);
    arr = _toConsumableArray(result);
    return result.length;
  };

  return run(0, []);
};

var arrShiftRec = function arrShiftRec(arr) {
  var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return arr.length ? [arr[i]].concat(_toConsumableArray(arrShiftRec(arr.slice(1)))) : [];
};

var arrShiftRec2 = function arrShiftRec2(arr) {
  var run = function run(arr, i) {
    var newArr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var returnArr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    if (i === arr.length) return returnArr;
    i > 0 ? newArr.push(arr[i]) : returnArr.push(arr[i]);
    return run(arr, i + 1, newArr, returnArr);
  };

  return run(arr, 0, []);
}; // console.log(arrShiftRec2([1,2,3,4,5]))


var arrShiftRec3 = function arrShiftRec3(arr) {
  var run = function run(arr, i, returnVal) {
    if (i === arr.length) {
      arr.length = arr.length - 1;
      return returnVal;
    }

    if (i === 0) returnVal = [arr[i]];else arr[i - 1] = arr[i];
    return run(arr, i + 1, returnVal);
  };

  return run(arr, 0, 0);
};

var arrTest2 = [1, 2, 3, 4, 5];
console.log(arrShiftRec3(arrTest2));
console.log(arrTest2); //array.slice 

var arraySlice = function arraySlice(arr) {
  var begin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length;
  var resultArr = [];

  for (var i = begin; i < end; i++) {
    resultArr.push(arr[i]);
  }

  return resultArr;
}; // console.log(arraySlice([1,2,3,4,5],2,4))
//array.slice 재귀


var arraySliceRe = function arraySliceRe(arr) {
  var begin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length;

  var run = function run() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var i = arguments.length > 1 ? arguments[1] : undefined;
    var begin = arguments.length > 2 ? arguments[2] : undefined;
    var end = arguments.length > 3 ? arguments[3] : undefined;
    if (i === end) return; // resultArr.push(arr[i])
    // i++
    // run(i, resultArr)
    // return resultArr

    return [arr[i]].concat(run(arr, i + 1, begin, end));
  };

  return run(arr, begin, begin, end);
}; // console.log(arraySliceRe([1,2,3,4,5],2,4))


var arraySliceRec2 = function arraySliceRec2(arr) {
  var begin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length;

  var run = function run(arr) {
    var begin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : begin;
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : end;
    var i = arguments.length > 3 ? arguments[3] : undefined;
    if (i === end) return [];
    return [arr[i]].concat(_toConsumableArray(run(arr, begin, end, i + 1)));
  };

  return run(arr, begin, end, begin);
};

console.log(arraySliceRec2([1, 2, 3, 4, 5], 2, 4)); //array.some

var arraySome = function arraySome(arr, f) {
  var result = false;

  for (var i = 0; i < arr.length; i++) {
    if (f(arr[i])) result = true;
  }

  return result; // console.log(result)
}; // console.log(arraySome([1,2,3],x=>x>2))
// console.log(arraySome([1,2,3],x=>x>3))
//array.some 재귀


var arraySomeRe = function arraySomeRe(arr, f) {
  var run = function run(i) {
    var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (i === arr.length) return false;

    if (f(arr[i])) {
      result = true;
      return result;
    } else {
      i++;
      return run(i);
    }
  };

  return run(0);
};

var arrSomeRec = function arrSomeRec(arr, f, i) {
  return arr.length ? f(arr[0]) ? true : arrSomeRec(arr.slice(1), f) : false;
};

console.log(arrSomeRec([2, 3, 4], function (x) {
  return x > 4;
}));
console.log(arrSomeRec([2, 3, 4], function (x) {
  return x > 1;
})); //array.splice
// const arraySplice = (arr, start, delCount, ...items) => {
//   const returnArr = []
//   const index = []
//   if(start > arr.length) start = arr.length
//   if(start < 0 && Math.abs(start) > arr.length) start = 0
//   if(delCount > arr.length - start || !delCount) delCount = arr.length-start
//   for(let i = start; i<start+delCount; i++) { //리턴할 배열
//     returnArr.push(arr[i])
//     index.push(i)
//   }
//   // arr[i] = returnArr[i-start]
//   // console.log(arr).
//   // console.log(items)
//   // return returnArr //제거한 요소 
// }
// console.log(arraySplice([0,1,2,3,4],2,2,'a','b'))
//arr.splice

var arraySplice = function arraySplice(arr, start) {
  var delCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length - start;
  if (start > arr.length) start = arr.length;
  if (start < 0 && Math.abs(start) > arr.length) start = 0;
  if (delCount > arr.length - start) delCount = arr.length - start;
  var returnArr = [];
  var front = [];
  var back = [];

  for (var i = 0; i < arr.length; i++) {
    if (i < start) front.push(arr[i]);else if (i >= start + delCount) back.push(arr[i]);else {
      returnArr.push(arr[i]);
    }
  }

  for (var _len12 = arguments.length, items = new Array(_len12 > 3 ? _len12 - 3 : 0), _key12 = 3; _key12 < _len12; _key12++) {
    items[_key12 - 3] = arguments[_key12];
  }

  arr = front.concat(items).concat(back);
  return returnArr;
};

var arraySplice2 = function arraySplice2(arr, start) {
  var delCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length - start;
  if (start > arr.length) start = arr.length;
  if (start < 0 && Math.abs(start) > arr.length) start = 0;
  if (delCount > arr.length - start) delCount = arr.length - start;

  var copyArr = _toConsumableArray(arr);

  var leftCount = copyArr.length - start - delCount;
  var returnArr = [];
  arr.length = 0; // 원본 배열 삭제

  for (var _len13 = arguments.length, args = new Array(_len13 > 3 ? _len13 - 3 : 0), _key13 = 3; _key13 < _len13; _key13++) {
    args[_key13 - 3] = arguments[_key13];
  }

  for (var i = 0; copyArr.length || args.length; i++) {
    if (i < start) returnArr.push(copyArr.shift());else {
      if (i < start + delCount) copyArr.shift();
      if (args.length) returnArr.push(args.shift());else returnArr.push(copyArr.shift());
    }
  } // for(let i = start; i< start+delCount; i++) {
  //   returnArr.push(arr[i])
  // }
  // for(let i = 0; i < start; i++) {
  //   arr[i] = copyArr[i]
  // }
  // if(args.length) arr.push(...args)
  // const arrLength = arr.length
  // for(let i = arrLength; i < arrLength+leftCount; i++) {
  //   arr[i] = copyArr[i-arrLength+start+delCount]
  // }


  return returnArr;
};

var arrTest7 = [0, 1, 2, 3, 4, 5];
console.log(arraySplice2(arrTest7, 2, 3, 'a', 'b')); // console.log(arraySplice2(arrTest7, 2, 3))

console.log(arrTest7);
var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
console.log(arraySplice2(myFish, 0, 2, 'parrot', 'anemone', 'blue')); // console.log(myFish)
//arr.splice 재귀

var arraySpliceRec = function arraySpliceRec(arr, start) {
  var delCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length - start;

  var run = function run() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var i = arguments.length > 1 ? arguments[1] : undefined;
    if (i === arr.length) return;
    return i < start || i >= start + delCount ? run(arr, i + 1) : [arr[i]].concat(run(arr, i + 1));
  };

  return run(arr, 0);
}; // console.log(arraySpliceRec([0,1,2,3,4,5],3,1))
// const arraySpliceRec2 = (arr, start, delCount = arr.length-start, ...args) => {
//   const run = (result = [], front =[], back =[], i, arr=[], start, delCount, args) => {
//     if (i === arr.length) return result
//     if (i < start) front.push(arr[i])
//     else if(i >= start + delCount) back.push(arr[i])
//     return run([...front, ...args, ...back], front, back, i+1, arr, start, delCount, args)
//   }
//   return run([], [], [], 0, arr, start, delCount, args)
// }


var arraySpliceRec2 = function arraySpliceRec2(arr, start) {
  var delCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length - start;

  var run = function run(copy, returnArr, front, back, i, arr, start, delCount, args) {
    if (i < 0) {
      arr.push.apply(arr, _toConsumableArray(front));
      if (args) arr.push.apply(arr, _toConsumableArray(args));
      arr.push.apply(arr, _toConsumableArray(back));
      return returnArr;
    }

    copy.push(arr[i]);
    arr.length--;
    if (i < start) front.unshift(copy[0]);else if (i >= start + delCount) back.unshift(copy[0]);else if (i >= start && i < start + delCount) returnArr.unshift(copy[0]);
    return run(copy.slice(1), returnArr, front, back, i - 1, arr, start, delCount, args);
  };

  for (var _len14 = arguments.length, args = new Array(_len14 > 3 ? _len14 - 3 : 0), _key14 = 3; _key14 < _len14; _key14++) {
    args[_key14 - 3] = arguments[_key14];
  }

  return run([], [], [], [], arr.length - 1, arr, start, delCount, args);
};

var arrTest9 = [0, 1, 2, 3, 4, 5];
console.log(arraySpliceRec2(arrTest9, 2, 3)); // console.log(arraySpliceRec2(arrTest9,2,3,'a','b'))

console.log(arrTest9); // const arrTest8 = [0,1,2,3,4]
// console.log(arraySpliceRec2(arrTest8, 2, 1, 'a','b'))
// console.log(arrTest8)
// console.log(arraySpliceRec2([0,1,2,3,4,5],3,1,'a', 'b', 'c'))
// console.log(arraySpliceRec2(['Jan', 'March', 'April', 'June'],1, 0, 'Feb'))
// console.log(arraySpliceRec2(['angel', 'clown', 'mandarin', 'sturgeon'],2, 3, 'drum', 'guitar'))
//arrayTostring 

var arrayToString = function arrayToString(arr) {
  var str;
  var result = '';

  for (var i = 0; i < arr.length; i++) {
    if (i == 0) str = arr[i].toString();else {
      str = ',' + arr[i].toString();
    }
    result += str;
  }

  return result;
}; // console.log(arrayToString(['a','p','p','l','e']))
//arrayTostring 재귀


var arrayToStringRec = function arrayToStringRec(arr) {
  var run = function run(i) {
    var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (arr.length === 0) return "";
    return (i === 0 ? '' : ',') + arr[0].toString() + run(i + 1, arr.slice(1));
  };

  return run(0, arr);
};

console.log(arrayToStringRec([1, 2, 3, 4, 5])); // console.log(arrayToStringRec(['a','p','p','l','e']))
//arrayUnshift

var arrayUnshift = function arrayUnshift(arr) {
  var _ref2;

  for (var _len15 = arguments.length, eles = new Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
    eles[_key15 - 1] = arguments[_key15];
  }

  var newArr = (_ref2 = [].concat(eles)).concat.apply(_ref2, _toConsumableArray(arr));

  return newArr.length;
};

var arrayUnshift2 = function arrayUnshift2(arr) {
  arr.length = arr.length + (arguments.length <= 1 ? 0 : arguments.length - 1);

  for (var i = arr.length - 1; i >= 0; i--) {
    if (i > (arguments.length <= 1 ? 0 : arguments.length - 1) - 1) arr[i] = arr[i - (arguments.length <= 1 ? 0 : arguments.length - 1)];else arr[i] = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
  }

  return arr.length;
}; // const arrTest5 = [1,2,3]
// console.log(arrayUnshift2(arrTest5,'a','b','c'))
// console.log(arrTest5)
//arrayUnshift 재귀


var arrayUnshiftRec = function arrayUnshiftRec(arr) {
  for (var _len16 = arguments.length, els = new Array(_len16 > 1 ? _len16 - 1 : 0), _key16 = 1; _key16 < _len16; _key16++) {
    els[_key16 - 1] = arguments[_key16];
  }

  return els.length ? [els[0]].concat(_toConsumableArray(arrayPushRec.apply(void 0, _toConsumableArray(els.slice(1)))), _toConsumableArray(arr)) : [];
}; // console.log(arrayUnshiftRec([1,2,3],'a','b','c'))


var arrayUnshiftRec2 = function arrayUnshiftRec2(arr) {
  var run = function run(i, arr) {
    for (var _len18 = arguments.length, args = new Array(_len18 > 2 ? _len18 - 2 : 0), _key18 = 2; _key18 < _len18; _key18++) {
      args[_key18 - 2] = arguments[_key18];
    }

    if (i === args.length) return arr.length;
    return run(i + 1, [].concat(_toConsumableArray(args[i]), _toConsumableArray(arr)), args);
  };

  for (var _len17 = arguments.length, args = new Array(_len17 > 1 ? _len17 - 1 : 0), _key17 = 1; _key17 < _len17; _key17++) {
    args[_key17 - 1] = arguments[_key17];
  }

  return run(0, arr, args);
};

console.log(arrayUnshiftRec2([1, 2, 3], 'a', 'b', 'c'));

var arrayUnshiftRec3 = function arrayUnshiftRec3(arr) {
  var run = function run(i, arr, args) {
    if (!args.length) return arr.length;
    arr.length++;

    for (var _i5 = arr.length - 1; _i5 >= 0; _i5--) {
      if (_i5 > 0) arr[_i5] = arr[_i5 - 1];
    }

    arr[i] = args[0];
    return run(i + 1, arr, args.slice(1));
  };

  for (var _len19 = arguments.length, args = new Array(_len19 > 1 ? _len19 - 1 : 0), _key19 = 1; _key19 < _len19; _key19++) {
    args[_key19 - 1] = arguments[_key19];
  }

  return run(0, arr, args);
}; // const arrTest6 = [1,2,3]
// console.log(arrayUnshiftRec3(arrTest6, 'a', 'b'))
// console.log(arrTest6)
// const arrayValue = (arr) => {
//   const result = arr.map((ele, index) => {
//     return {
//       ele
//     }
//   })
//   return Object.values(result)
// }
// console.log(arrayValue(['a','b','c']))
},{}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "9900" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/0529_array.e31bb0bc.js.map