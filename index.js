//음수 index => 양수index
const negativeTopositive = (totalNum, index) =>{
  const absIndex = Math.abs(index)
  let newIndex
  if(absIndex > totalNum) {
    newIndex = totalNum - (absIndex - Math.floor(absIndex/totalNum)*totalNum)
  }
  else {
    newIndex = totalNum + index
  }
  return newIndex
}

//array.from 반복
const arrayFrom = (obj,f =x=>x) => {
  const newArr =[]
  for(let i=0; i<obj.length; i++) {
    newArr[i] = f(obj[i], i)
  }
  return newArr
}
// console.log(Array.from({length: 5}, (v, i) => i))
// console.log(arrayFrom({length: 5}, (v, i) => i))
// console.log(arrayFrom('foo'))
// console.log(arrayFrom([1,2,3],x=>x+2))

//array.from 재귀
const arrayFromRec = (obj, f = x => x) => {
  const run = (acc, obj, i, f) => {
    if (i === obj.length) return acc;
    const targetItem = f(obj[i], i);
    return run([...acc, targetItem], obj, i + 1, f);
  };
  return run([], obj, 0, f);
};

//array.isarray
const arrayIsArray = (obj) =>{
  const objToStr = Object.prototype.toString
  // console.log(objToStr.call(obj))
  return objToStr.call(obj) === '[object Array]'
}
// console.log(arrayIsArray('foo'))
// console.log(Array.isArray('foo'))

//array.of
const arrayOf = (...ele) => {
  const newArr = []
  for(let i=0; i<ele.length; i++) {
    newArr[i] = ele[i]
  }
  return newArr
}
//array.of 재귀
const arrayOfRe = (...ele) => {
  const run = (arr, i, ...ele) =>{
    if(i === ele.length) return
    arr[i] = ele[i]
    i++
    run(arr, i, ...ele)
    return arr
  }
  return run([],0,...ele)
}
const arrayOfRec = (...els) => els.length ? [els[0], ...arrayOfRec(...els.slice(1))] : []
// console.log(arrayOfRe(1,2,3))
// console.log(arrayOfRe(undefined))
// console.log(arrayOf(7))
// console.log(Array.of(7))

//array.concat
const arrayConcat = (arr, ...val) => {
  let addArr = []
  if(!val[0]) val = arr
  for(let i=0; i<val.length; i++) {
    if(!Array.isArray(val[i])) addArr = [...addArr, val[i]] 
    else{
      addArr = [...addArr,...val[i]]
    }
  }
  arr.push(...addArr)
  // const newArr = [...arr, ...addArr] // 필요없음
  return arr
}
// console.log(arrayConcat([1,2,3],'a','b','c'))
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
const arrayConcatRe = (arrRe, ...val) => {
  const run = (val=[],arr=[]) => {
    if(val.length === 0) return arr 

    return [...arr, ...Array.isArray(val[0]) ? [...val[0], run(val.slice(1))] : [val[0], run(val.slice(1))]]
  }
  return run(val,arrRe)
}
// console.log(arrayConcatRe([1,2,3],'str'))
const arrConcatRec2 = (arr, ...args) => {
  const run = (arr, args) => {
    if (!args.length) return arr;
    const target = args[0];
    const computedTarget = Array.isArray(target) ? target : [target];
    return run([...arr, ...computedTarget], args.slice(1));
  };
  return run(arr, args)
};
console.log(arrConcatRec2([1,2,3],['a','b','c'],[4,5,6],'str'))
const arrConcatRec3 = (arr, ...args) => {
  const run = (arr, args) => {
    if (!args.length) return [];
    const target = args[0];
    const computedTarget = Array.isArray(target) ? target : [target];
    return [...arr, ...computedTarget, ...run([], args.slice(1))];
  };
  return run(arr, args)
};
//array.copyWithin
const arrcopywithin = (arr, target, start = 0, end = arr.length) =>{
  if(target < 0) target = negativeTopositive(arr.length, target)
  if(start < 0) start = negativeTopositive(arr.length, start)
  if(end < 0) end = negativeTopositive(arr.length, end)
  let newArr = []
  let copyArr = []
  for(let i = start; i<end; i++) {
    copyArr = [...copyArr, arr[i]] 
  }
  for(let i=0; i<copyArr.length; i++) {
    newArr[target+i] = copyArr[i]
  }
  for(let i=0; i<arr.length; i++) {
    if(!newArr[i]) newArr[i] = arr[i]
  }
  return newArr
}
// console.log(arrcopywithin([1,2,3,4,5],0,-2))
// console.log([1,2,3,4,5].copyWithin(0,-2))

const arrcopywithinRe = (arr, target, start = 0, end = arr.length) => {
  if(target < 0) target = negativeTopositive(arr.length, target)
  if(start < 0) start = negativeTopositive(arr.length, start)
  if(end < 0) end = negativeTopositive(arr.length, end)
  let copyArr = []
  for(let i = start; i<end; i++) {
    copyArr = [...copyArr, arr[i]] 
  }
  const run = (i,newArr) => {
    if(i === arr.length) return
    // newArr[i] = arr[i]
    if(i < target || i > target+copyArr.length-1) {
      newArr[i] = arr[i]
    }
    else {
      for(let i=0; i<copyArr.length; i++) {
        newArr[target+i] = copyArr[i]
      }
    }
    i++
    run(i,newArr)
    // arr = newArr
    return newArr 
  }
  return(run(0,[]))
}

//array.fill
const arrayFill = (arr, val, start = 0, end = arr.length) => {
  if(start < 0) start = negativeTopositive(arr.length, start)
  if(end < 0) end = negativeTopositive(arr.length, end)
  // let newArr = []
  for(let i = start; i < end; i++) {
    arr[i] = val
  }
  return arr
}
//array.fill 재귀
const arrayFillRe = (arr, val, start = 0, end = arr.length) => {
  const run= (val, runArr = [], i, start, end) => {
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
      if(i === arr.length) return 
    return (i>=start && i<end ? [val] : [arr[i]]).concat(run(val, arr, i+1, start, end))
  }
  return run(val, arr, 0, start, end)
}
// console.log(arrayFillRe([1,2,3],4))
const arrayFillRec2 = (arr, val, start=0, end=arr.length) => {
  const run = (i, runArr, resultArr) => {
    if(i === runArr.length) return resultArr 
    const computedValue = i >= start && i < end ? val : runArr[i]
    // console.log(computedValue)
    resultArr.push(computedValue)
    return run(i+1, runArr, resultArr)
    // return [...computedValue].concat(run(i+1, arr))
  }
  return run(0, arr, [])
}
console.log(arrayFillRec2([1,2,3],4))
// console.log(arrayFillRec2([1,2,3],4,1,1))

//array.filter
const arrayFilter = (arr, f) => {
  let newArr = []
  for(let i of arr) {
    if(f(i)) newArr.push(i) 
  }
  return newArr
}
// console.log(arrayFilter([1,2,3,4,5,6],test => test>5))
//array.filter 재귀
const arrayFilterRe = (arr, f) =>{
  const run = (arr=[]) => {
    if(arr.length === 0) return 
    // if(i===arr.length) return
    // if(f(arr[i])) newArr.push(arr[i])
    // i++
    // run(i,newArr)
    // return (f(arr[i]) ? [...arr[0], ...run(arr.slice(1))] : [...run(arr.slice(1))] )
    return (f(arr[0]) ? [arr[0], run(arr.slice(1))] : run(arr.slice(1)))
  }
  return run(arr)
}
const arrayFilterRec2 = (arr, f) =>{
  const run = (runArr=[]) => {
    if(!runArr.length) return
    const target = runArr[0]
    return f(target) ? [target, run(runArr.slice(1))] : run(runArr.slice(1))
  }
  return run(arr)
}
// const arrFilterRec = (arr, f) => f(arr[0]) && arr.length ? [arr[0], arrFilterRec(arr.slice(1), f)] : arrFilterRec(arr.slice(1), f) 

const arrayFilterRec3 = (arr, f) => {
  const run = (runArr, resultArr, f) => {
    if(!runArr.length) return resultArr
    //  resultArr.push(runArr[0])  
    // return run(runArr.slice(1), resultArr, f)
    return run(runArr.slice(1), f(runArr[0]) ? [...resultArr, runArr[0]] : [...resultArr], f)
  }
  return run(arr, [], f)
}
console.log(arrayFilterRec3(['a','aa','aaa'], test => test.length == 3)) 

// const arrflatRec = (arr) => {
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
const arrayFind = (arr, f) => {
  for(let i of arr) {
    if(f(i)) return i
  }
}
// console.log(arrayFind([2,4,3],el=>el>2))

//array.find 재귀
const arrayFindRe = (arr,f) => {
  const run = (arr=[]) => {
    if(arr.length === 0) return
    return (f(arr[0]) ? arr[0] : run(arr.slice(1)))
  }
  return run(arr)
}
console.log('find: ' +arrayFindRe(['a','aa','aaa'],el=>el==='aa'))

//array.findIndex
const arrayFindIndex = (arr,f) => {
  let index = -1
  for(let i = 0; i < arr.length; i++) {
    if(f(arr[i])) {
      index = i
      break
    }
  }
  return index
}
// console.log(arrayFindIndex(['a','aa','aaa', 'aa'],el=>el==='aaaa'))

//array.findeIndex 재귀
const arrayFindIndexRe = (arr,f) => {
  const run = (i,arr=[],f) => {
    if(i === arr.length) return -1
    return (f(arr[i]) ? i : run(i+1,arr,f))
  }
  return run(0, arr,f)
}
console.log('findIdx: '+arrayFindIndexRe(['a','aa','aaa', 'aa'], el=>el.length>2))

//arrayflat loop 다시
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
const arrayFlatRe = (arr, depth=1) => {
  const run = (arr = []) => {
    if(arr.length === 0) return 
    // if(Array.isArray(arr[i])) cutArr.push(arr[i])
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
    return (Array.isArray(arr[0]) ? [...arr[0]] : [arr[0]]).concat(run(arr.slice(1)))
  }
  return run(arr)
}
// console.log(arrayFlatRe([1,2,[3,4,[5]]]))
// console.log(arrayFlatRe([[1,2],[3,4]]))
const arrflatRec2 = (arr) => {
  const run = (runArr, newArr=[]) => {
    if(!runArr.length) return newArr
    const computedValue = Array.isArray(runArr[0]) ? runArr[0] : [runArr[0]]
    // return (run([...computedValue], runArr.slice(1)))
    return run(runArr.slice(1), newArr.push(...computedValue))
  }
  return run(arr)
}
// console.log(arrflatRec2([1,2,[3,4,[5]]]))
const arrflatRec3 = (arr) => {
  const run = (runArr, newArr=[]) =>{
    if(!runArr.length) return newArr
    const computedValue = Array.isArray(runArr[0]) ? runArr[0] : [runArr[0]]
    newArr.push(...computedValue)
    return run(runArr.slice(1),newArr)
  }
  return run(arr, [])
}
// console.log(arrflatRec3([1,2,[3,4,[5]]]))

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

const arrflatRec4 = (arr, depth=1) => {
  const run = (i, arr, depth=depth, newArr) => {
    if(i === arr.length) {
      if(depth > 1) {
        // console.log('loop')
        return run(0, newArr, depth-1, [])
      }
      else {
        return newArr 
      } 
    }
    const computedValue = Array.isArray(arr[i]) ? arr[i] : [arr[i]]
    newArr.push(...computedValue)
    // console.log(newArr)
    return run(i+1, arr, depth, newArr)
  }
  return run(0, arr, depth, [])
}
// console.log(arrflatRec4([1,[2,3],4,[5]],Infinity))
// console.log(arrflatRec4([1,2,[3,4,[5]]],2))
// console.log(arrflatRec4([1,2,[3,4,[5,[6]]]], 3))

//array.flatMap
const arrayFlatMap = (arr, f) => {
  const newArr = []
  for(let i of arr) {
    newArr.push(f(i))
  }
  return newArr.flat()
  // console.log(newArr)
}
// console.log(arrayFlatMap([1,2,3,4], x => [x*2]))

//array.flatMap 재귀
const arrayFlatMapRe = (arr, f) => {
  const run = (arr=[]) => {
    if(arr.length === 0) return
    // newArr.push(f(arr[i]))
    // i++
    // run(i, newArr)
    // // console.log(newArr.flat())
    // return newArr.flat()
    return (Array.isArray(f(arr[0])) ? [...f(arr[0])] : [f(arr[0])]).concat(run(arr.slice(1)))
  }
  return run(arr)
}
// console.log(arrayFlatMapRe([1,2,3,4], x=>[x+2]))

const arrayFlatMapRec2 = (arr, f) => {
  const run = (arr, f) => {
    if(!arr.length) return []
    const target = arr[0]
    const computedTarget = Array.isArray(target) ? target : [target];
    return [...f(...computedTarget), ...run(arr.slice(1), f)]
  }
  return run(arr, f)
}
console.log(arrayFlatMapRec2([1,2,3,4], x=>[x+2]))

//array.foreach
const arrayForeach = (arr,f) => {
  for(let i = 0; i<arr.length; i++) {
    f(arr[i])
  }
}
// console.log(arrayForeach([1,2,3,4], x=>x+1))

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
const arrayForeachRec = (arr, f) => arr.length ? (f(arr[0]), arrayForeach(arr.slice(1), f)) : null
// console.log(arrayForeachRec([1,2,3,4], x=>x+1))

//array.include
const arrayInclude = (arr, value, start = 0) => {
  if(start<0) start = negativeTopositive(start)
  let result;
  for(let i=start; i<arr.length; i++) {
    if(arr[i] === value) {
      result = true
      break
    }
    else {
      result = false
    }
  }
  return result
}
// console.log(arrayInclude([1,2,3],4))

//array.indclude 재귀
const arrayIncludeRe = (arr, value, start = 0) => {
  const run = (arr=[]) => {
    if(arr.length === 0) return false
    return arr[0] === value ? true : run(arr.splice(1))
  }
  return run(arr)
}

console.log(arrayIncludeRe([1,2,3],4))

//array.indexOf
const arrayIndexof = (arr, eleToFind, start = 0) => {
  let index = -1
  if(start<0) start = negativeTopositive(start)
  for(let i=start; i < arr.length; i++) {
    if(arr[i] === eleToFind) {
      // console.log(i)
      index = i
      break
    }
  }
  return index
}
// console.log(arrayIndexof([1,2,3],4))

//array.indexOf 재귀
const arrayIndexofRe = (arr, eleToFind, start = 0) => {
  const run = (i, arr=[]) => {
    if(i === arr.length) return -1
    // if(arr[i] === eleToFind) {
    //   result = i
    //   return result
    // }
    // else {
    //   i++
    //   return run(i)
    // }
    return arr[i] === eleToFind ? i : run(i+1, arr)
  }
  return run(0, arr)
}
console.log(arrayIndexofRe([1,2,3],4))

//array.join
const arrayJoin = (arr, seperator=',') => {
  let str 
  let result =''
  for(let i=0; i<arr.length; i++) {
    if(i==0) str = arr[i].toString()
    else {
      str = seperator + arr[i].toString()
    }
    result += str
  }
  return result
}
// console.log(arrayJoin(['a','b','c','d']))
// console.log(arrayjoin([1,2,3,4]))

//array.join() 재귀
const arrayJoinRe = (arr, seperator=',') => {
  const run = (i, arr = []) => {
    if(arr.length === 0) return ""
    // console.log(arr)
    // console.log(arr[0].toString())
    // if(i == 0) result = arr[i].toString()
    // else {
    //   str = seperator + arr[i].toString()
    // }
    // result += str
    // i++
    // console.log(result)
    // return result + run(i,str, result) 
    return (i === 0 ? '' : seperator) + arr[0].toString()+run(i+1, arr.slice(1)) 
  }
  return run(0, arr)
} 
console.log(arrayJoinRe(['a','b','c','d']))

//array.map
const arrayMap = (arr, f) => {
  const newArr = []
  for(let i of arr) {
    newArr.push(f(i))
  } 
  return newArr
}
// console.log(arrayMap([1,2,3,4], x=>x+2))

const arrayMapRe = (arr, f) => {
  const run = (arr=[]) => {
    if(arr.length === 0) return
    // newArr.push(f(arr[i]))
    // i++
    // run(i, newArr)
    // return newArr
    return [f(arr[0])].concat(run(arr.slice(1)))
  }
  return run(arr)
}
// console.log(arrayMapRe([1,2,3,4], x=>x+2))
// console.log(arrayMapRe([1,2,3,4], x=>x*2))

const arrayMapRec2 = (arr, f) => {
  const run = (arr, f) => {
    if(!arr.length) return []
    return [f(arr[0]), ...run(arr.slice(1), f)]
  }
  return run(arr, f)
}
console.log(arrayMapRec2([1,2,3,4], x=>x*2))

//array.pop
const arrayPop = (arr) =>{
  const resultArr = []
  const oldArr = []
  resultArr.push(arr[arr.length-1]) 
  for(let i = 0; i<arr.length-1; i++) {
    oldArr.push(arr[i])
  }
  arr = [...oldArr]
  // console.log(arr)
  return resultArr
}
// console.log(arrayPop([1,2,3,4]))

const arrayPop2 = (arr) => {
  const returnArr = arr[arr.length-1]
  delete arr[arr.length-1]
  arr.length = arr.length-1
  return [returnArr]
}
console.log(arrayPop2([1,2,3,4,5]))
//array.pop 재귀
const arrayPopRe = (arr) => {
  const run = (arr = []) => {
    // resultArr.push(arr[arr.length-1])
    if(arr.length === 1) return
    // originalArr.push(arr[i])
    // i++
    // run(i,[],originalArr)
    // arr = [...originalArr]
    // // console.log(arr)
    // return resultArr
    return [arr[0]].concat(run(arr.slice(1)))
  }
  return run(arr)
}
// console.log(arrayPopRe([1,2,3,4,5]))

const arrayPopRec2 = (arr) => {
  const run = (arr, newArr=[], returnArr = []) => {
    if(!arr.length) return returnArr
    arr.length === 1 ? returnArr.push(arr[0]) : newArr.push(arr[0])
    return run(arr.slice(1), newArr, returnArr)
  }
  return run(arr, [])
}
// console.log(arrayPopRec2([1,2,3,4,5]))

// const arrayPopRec3 = (arr, i=0) => i === arr.length-1 ? (delete arr [i], arr.length = arr.length-1) : arrayPopRec3(arr, i+1) 

// const arrayPopRec3 = (arr) => {
//   const run = (arr, i) => {
//     const copyArr = [...arr]
//     if (i = arr.length) return [copyArr[copyArr.length-1]]
//     return run(i === arr.length - 2 ? ([], arr.length = arr.length-1 ): copyArr.splice(1))
//   }
//   return run(arr, 0)
// }
const arrayPopRec3 = (arr) => {
  const run = (arr, i, returnVal) => {
    if(i === arr.length) {
      arr.length--
      return returnVal
    }
    if(i === arr.length-1) returnVal = [arr[i]]
    return run(arr, i+1, returnVal)
  }
  return run(arr, 0, 0)
}
const arrTest3 = [1,2,3,4,5]
console.log(arrayPopRec3(arrTest3))
console.log(arrTest3)

//array.push
const arrayPush = (arr,...eles) => {
  // console.log(arr.length + eles.length)
  arr = arr.concat(eles)
  console.log(arr)
  return arr.length
}
const arrayPush2 = (arr, ...args) => {
  const copyArr = [...arr]
  arr.length = copyArr.length + args.length
  for(let i = 0 ; i < args.length; i++) {
    arr[i+copyArr.length] = args[i]
  }
  // console.log(arr)
  return arr.length
}
console.log(arrayPush2([1,2,3],'a','b','c'))
// console.log(arrayPush([1,2,3],15))

//array.push 재귀
const arrayPushRe = (arr, ...eles) => {
  const run = (eleArr = []) => {
    // if (eleArr.length === 0) return
    // arr = arr.concat(...eles[i])
    // i++
    // run(i)
    // return arr.length
    // return arr.concat(run(arr.slice(1)))
    return arr.concat(eleArr.length ? [eleArr[0], ...run(eleArr.slice(1))] : [])
    // return [...eleArr[0]].concat(run(eleArr.slice(1)))
  }
  return run(eles)
}
// console.log(arrayPushRe([1,2,3],'a','b','c'))

const arrayPushRec = (arr,...els) => els.length ? [...arr, els[0], ...arrayPushRec(...els.slice(1))] : []
console.log(arrayPushRec([1,2,3],'a','b','c'))

const arrayPushRec2 = (arr, ...args) => {
  const run = (arr, args) => {
    if(!args.length) return arr.length
    else {
      arr.length += 1
      arr[arr.length-1] = args[0]
    }
    // const newArr = args.length ? (arr.length += 1, arr[arr.length-1] = args[0]): [...arr] //if문
    // console.log (arr)
    return run(arr, args.slice(1)) 
  }
  return run(arr, args)
}
// const arrTest4 = [1,2,3]
// console.log(arrayPushRec2(arrTest4,'a','b','c'))
// console.log(arrTest4)

//array.reduce
const arrayReduce = (arr, f, initialValue=arr[0]) => {
  let accumulator = initialValue
  // console.log(accumulator)
  for(let i=0; i<arr.length; i++) {
    accumulator += f(arr[i])
    // console.log(accumulator)
  }
  return accumulator
}
// console.log(arrayReduce([0,1,2,3], x => -x, 15))
// console.log(arrayReduce([0,1,2,3], x => x))

//array.reduce 재귀
const arrayReduceRe = (arr, f, initialValue=arr[0]) => {
  const run = (arr = [], accumulator = initialValue) => {
    // if(arr.length === 0) return
    // accumulator += f(arr[i])
    // console.log(accumulator)
    // i++
    // run(i, accumulator)
    // return accumulator
    // console.log(f(arr[0]))
    return arr.length ? f(arr[0]) + run(arr.slice(1)) : accumulator
  }
  return run(arr)
}
console.log(arrayReduceRe([0,1,2,3], x => -x, 15))
// console.log(arrayReduceRe([0,1,2,3], x => x))
// const arrReduceRec = (arr, f, initialValue = arr[0]) => (arr.length ? f(arr[0]) : initialValue) + arrReduceRec(arr)

//array.reduceRigth
const arrayReduceRight = (arr, f, initialValue = arr[arr.length-1]) => {
  let previousValue = initialValue
  for(let i = arr.length-2; i >= 0 ; i--) {
    previousValue += f(arr[i])
    // console.log(arr[i])
  }
  return previousValue
}
// console.log(arrayReduceRight([1,2,3], x=> x))

//array.reduceRigth 재귀
const arrayReduceRightRe = (arr, f, initialValue=arr[arr.length-1]) => {
  const run = (arr=[], i, previousValue = initialValue) => {
    // if(i === -1) return
    // console.log(arr[i])
    // previousValue += f(arr[i])
    // i--
    // run(i, previousValue)
    // return previousValue
    return arr.length ? f(arr[i]) + run(arr.pop(), i-1) : previousValue
    // return (i === 0 ? '' : seperator) + arr[0].toString() + run(i+1, arr.slice(1))
  }
  return run(arr, arr.length-1)
}
console.log(arrayReduceRightRe([1,2,3], x=> x))

//array.reverse
const arrayReverse = (arr) => {
  const resultArr  = []
  for(let i = arr.length-1; i >= 0; i--) {
    resultArr.push(arr[i])
  }
  return resultArr
}
// console.log(arrayReverse([1,2,3]))

const arrayReverse2 = (arr) => {
  // const copyArr = [...arr]
  // for(let i = 0; i < arr.length; i++) {
  //   delete arr[i]
  //   arr.length = 0
  // }

  // for(let i = copyArr.length-1; i >= 0; i--) {
  //   arr[i] = copyArr[copyArr.length-1-i]
  //   // console.log(copyArr.length-1-i)
  // }
  for (let i = 0; i<= arr.length/2 -1; i++) {
    // const save = arr[i] 
    // arr[i] = arr[arr.length-i-1]
    // arr[arr.length-i-1] = save
    [arr[i], arr[arr.length-i-1]] = [arr[arr.length-i-1], arr[i]]
  }
  // console.log(arr)
  return arr
}
console.log(arrayReverse2([1,2,3]))

//array.reverse 재귀 
const arrayReverseRe = (arr) => {
  const run = (arr = [], i) => {
    // if(i === -1) return
  //   resultArr.push(arr[i])
  //   i--
  //   run(i, resultArr)
  //   return resultArr
    // console.log(arr)
    return arr.length ? [arr[i], ...run(arr.pop(), i-1)] : []
  }
return run(arr, arr.length-1)
}
const arrayReverseRec = (arr) => arr.length ? [...arrayReverseRec(arr.slice(1)), arr[0]] : []
console.log(arrayReverseRec([1,2,3]))

const arrayReverseRec2 = (arr) => {
  const run = (arr, i, copyArr) => {
    if (i < 0) return arr = [...copyArr]
    copyArr.push(arr[i])
    delete arr[i]
    arr.length--
    // arr[i] = copyArr[0]
    // console.log(arr[i], copyArr[0])
    return run(arr, i-1, copyArr)
  }
  return run(arr, arr.length-1, [])
}

const arrReverseRec3 = (arr) => {
  const run = (arr, i, save) => {
    if(i > arr.length/2 -1) return arr
    save = arr[i]
    arr[i] = arr[arr.length-i-1]
    arr[arr.length-i-1] = save
    // [arr[i], arr[arr.length-i-1]] = [arr[arr.length-i-1], arr[i]]
    return run(arr, i+1, save)
  }
  return run(arr, 0, 0)
}
const arrTest = [1, 2, 3]
console.log(arrReverseRec3(arrTest))
console.log(arrTest)
//array.shift
const arrayShift = (arr) => {
  const resultArr = []
  for(let i = 1; i < arr.length; i++){
    resultArr.push(arr[i])
  }
  arr = [...resultArr]
  return arr.length
}
// console.log(arrayShift([1,2,3]))
const arrayShift2 = (arr) => {
  const copyArr = [...arr]
  for (let i = 0; i < arr.length; i++) {
    delete arr[i]
    arr.length = arr.length-1
  }
  for (let i = 1; i < copyArr.length; i++) {
    arr[i-1] = copyArr[i]
  }
  return arr
}
// console.log(arrayShift2([1,2,3]))
const arrayShift3 = (arr) => {
  const returnVal = arr[0]
  for(let i = 1; i<arr.length; i++) {
    arr[i-1] = arr[i]
  }
  arr.length--
  return [returnVal]
}
// const arrTest1 = [1, 2, 3]
// console.log(arrayShift3(arrTest1))
// console.log(arrTest1)

//array.shift 재귀
const arrayShiftRe = (arr) => {
  const run = (i, result) => {
    if(i === arr.length) return
    if(i > 0) result.push(arr[i])
    i++
    run(i, result)
    arr = [...result]
    return result.length
  }
  return run(0, [])
}
const arrShiftRec = (arr, i=1) => arr.length ? [arr[i], ...arrShiftRec(arr.slice(1))] : []
const arrShiftRec2 = (arr) => {
  const run = (arr, i, newArr =[], returnArr=[]) => {
    if(i === arr.length) return returnArr
    i > 0 ? newArr.push(arr[i]) : returnArr.push(arr[i])
    return run(arr, i+1, newArr, returnArr) 
  }
  return run(arr, 0, [])
}
// console.log(arrShiftRec2([1,2,3,4,5]))
const arrShiftRec3 = (arr) => {
  const run = (arr, i, returnVal) => {
    if(i === arr.length) {
      arr.length = arr.length-1
      return returnVal
    }
    if(i === 0) returnVal = [arr[i]]
    else arr[i-1] = arr[i]
    return run(arr, i+1, returnVal)
  }
  return run(arr, 0, 0)
}
const arrTest2 = [1,2,3,4,5]
console.log(arrShiftRec3(arrTest2))
console.log(arrTest2)

//array.slice 
const arraySlice = (arr, begin=0, end=arr.length) => {
  const resultArr = []
  for(let i = begin; i < end; i++) {
    resultArr.push(arr[i])
  }
  return resultArr
}
// console.log(arraySlice([1,2,3,4,5],2,4))

//array.slice 재귀
const arraySliceRe = (arr, begin=0, end=arr.length) => {
  const run = (arr=[], i, begin, end) => {
    if(i === end) return
    // resultArr.push(arr[i])
    // i++
    // run(i, resultArr)
    // return resultArr
    return [arr[i]].concat(run(arr, i+1, begin, end))
  }
  return run(arr, begin, begin, end)
}
// console.log(arraySliceRe([1,2,3,4,5],2,4))

const arraySliceRec2 = (arr, begin=0, end=arr.length) => {
  const run = (arr, begin=begin, end=end, i) => {
    if(i===end) return []
    return [arr[i], ...run(arr, begin, end, i+1)]
  }
  return run(arr, begin, end, begin)
}
console.log(arraySliceRec2([1,2,3,4,5],2,4))

//array.some
const arraySome = (arr, f) => {
  let result = false
  for(let i=0; i<arr.length; i++) {
    if(f(arr[i])) result = true
  }
  return result
  // console.log(result)
}
// console.log(arraySome([1,2,3],x=>x>2))
// console.log(arraySome([1,2,3],x=>x>3))

//array.some 재귀
const arraySomeRe = (arr, f) => {
  const run = (i, result = false) => {
    if(i === arr.length) return false
    if(f(arr[i])) {
      result = true
      return result
    }
    else {
      i++
      return run(i)
    }
  }
  return run(0)
}
const arrSomeRec = (arr, f, i) => arr.length ? (f(arr[0]) ? true : arrSomeRec(arr.slice(1), f)) : false
console.log(arrSomeRec([2,3,4], x=>x>4))
console.log(arrSomeRec([2,3,4], x=>x>1))

//array.splice
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
const arraySplice = (arr, start, delCount = arr.length-start, ...items) => {
  if(start > arr.length) start = arr.length
  if(start < 0 && Math.abs(start) > arr.length) start = 0
  if(delCount > arr.length - start) delCount = arr.length-start
  const returnArr = []
  const front = []
  const back = []
  for(let i=0; i<arr.length; i++) {
    if(i<start) front.push(arr[i])
    else if(i >= start + delCount) back.push(arr[i])
    else {
      returnArr.push(arr[i])
    }
  }
  arr = (front.concat(items)).concat(back) 
  return returnArr
}

const arraySplice2 = (arr, start, delCount = arr.length-start, ...args) => {
  if(start > arr.length) start = arr.length
  if(start < 0 && Math.abs(start) > arr.length) start = 0
  if(delCount > arr.length - start) delCount = arr.length-start
  const copyArr = [...arr]
  const leftCount = copyArr.length-start-delCount 
  const returnArr = []
  
  arr.length = 0 // 원본 배열 삭제
  for (let i=0; copyArr.length || args.length; i++) {
    if (i < start) returnArr.push(copyArr.shift())
    else {
      if(i < start+delCount) copyArr.shift()
      if(args.length) returnArr.push(args.shift())
      else returnArr.push(copyArr.shift())
    }
  }

  // for(let i = start; i< start+delCount; i++) {
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
  return returnArr
}
const arrTest7 = [0,1,2,3,4,5]
console.log(arraySplice2(arrTest7, 2, 3, 'a', 'b'))
// console.log(arraySplice2(arrTest7, 2, 3))
console.log(arrTest7)
const myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
console.log(arraySplice2(myFish,0, 2, 'parrot', 'anemone', 'blue'))
// console.log(myFish)


//arr.splice 재귀
const arraySpliceRec = (arr, start, delCount = arr.length-start, ...items) => {
  const run = (arr = [], i) => {
    if(i === arr.length) return
    return i < start || i >= start + delCount ? run(arr, i+1) : [arr[i]].concat(run(arr, i+1))
  }
  return run(arr, 0)
}
// console.log(arraySpliceRec([0,1,2,3,4,5],3,1))

// const arraySpliceRec2 = (arr, start, delCount = arr.length-start, ...args) => {
//   const run = (result = [], front =[], back =[], i, arr=[], start, delCount, args) => {
//     if (i === arr.length) return result
//     if (i < start) front.push(arr[i])
//     else if(i >= start + delCount) back.push(arr[i])
//     return run([...front, ...args, ...back], front, back, i+1, arr, start, delCount, args)
//   }
//   return run([], [], [], 0, arr, start, delCount, args)
// }

const arraySpliceRec2 = (arr, start, delCount = arr.length-start, ...args) => {
  const run = (copy, returnArr, front, back, i, arr, start, delCount, args) => {
    if (i < 0) {
      arr.push(...front)
      if(args) arr.push(...args)
      arr.push(...back)
      return returnArr 
    }
    copy.push(arr[i])
    arr.length --
    if (i < start) front.unshift(copy[0])
    else if (i >= start + delCount) back.unshift(copy[0])
    else if (i >= start && i< start+delCount) returnArr.unshift(copy[0]) 
    return run(copy.slice(1), returnArr, front, back, i-1, arr, start, delCount, args)
  }
  return run([], [], [], [], arr.length-1, arr, start, delCount, args)
}

const arrTest9 = [0,1,2,3,4,5]
console.log(arraySpliceRec2(arrTest9,2,3))
// console.log(arraySpliceRec2(arrTest9,2,3,'a','b'))
console.log(arrTest9)

// const arrTest8 = [0,1,2,3,4]
// console.log(arraySpliceRec2(arrTest8, 2, 1, 'a','b'))
// console.log(arrTest8)
// console.log(arraySpliceRec2([0,1,2,3,4,5],3,1,'a', 'b', 'c'))
// console.log(arraySpliceRec2(['Jan', 'March', 'April', 'June'],1, 0, 'Feb'))
// console.log(arraySpliceRec2(['angel', 'clown', 'mandarin', 'sturgeon'],2, 3, 'drum', 'guitar'))


//arrayTostring 
const arrayToString = (arr) => {
  let str 
  let result =''
  for(let i=0; i<arr.length; i++) {
    if(i==0) str = arr[i].toString()
    else {
      str = ',' + arr[i].toString()
    }
    result += str
  }
  return result
}
// console.log(arrayToString(['a','p','p','l','e']))

//arrayTostring 재귀
const arrayToStringRec = (arr) => {
  const run = (i, arr = []) => {
    if(arr.length === 0) return ""
    return (i === 0 ? '' : ',') + arr[0].toString()+run(i+1, arr.slice(1)) 
  }
  return run(0, arr)
} 
console.log(arrayToStringRec([1,2,3,4,5]))
// console.log(arrayToStringRec(['a','p','p','l','e']))

//arrayUnshift
const arrayUnshift = (arr, ...eles) => {
  const newArr = [...eles].concat(...arr)
  return newArr.length
}
const arrayUnshift2 = (arr, ...args) => {
  arr.length = arr.length + args.length
  for (let i = arr.length-1; i >=0 ; i--) {
    if (i > args.length-1) arr[i] = arr[i-args.length]
    else arr[i] = args[i]
  }
  return arr.length
}
// const arrTest5 = [1,2,3]
// console.log(arrayUnshift2(arrTest5,'a','b','c'))
// console.log(arrTest5)

//arrayUnshift 재귀
const arrayUnshiftRec = (arr,...els) => els.length ? [els[0], ...arrayPushRec(...els.slice(1)), ...arr] : []
// console.log(arrayUnshiftRec([1,2,3],'a','b','c'))

const arrayUnshiftRec2 = (arr, ...args) => {
  const run = (i, arr, ...args) => {
    if(i === args.length) return arr.length
    return run(i+1, [...args[i], ...arr], args)
  }
  return run(0, arr, args)
}
console.log(arrayUnshiftRec2([1,2,3],'a','b','c'))

const arrayUnshiftRec3 = (arr, ...args) => {
  const run = (i, arr, args) => {
    if(!args.length) return arr.length
    arr.length ++
    for (let i = arr.length-1; i >=0 ; i--) {
      if(i>0) arr[i] = arr[i-1]
    }
    arr[i] = args[0]
    return run(i+1, arr, args.slice(1))
  }
  return run(0, arr, args)
}
// const arrTest6 = [1,2,3]
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