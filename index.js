function map(sourceArray, func) {
    let r = []
    for (let i = 0; i < sourceArray.length; i++) {
        let element = sourceArray[i]
        r.push(func(element))
    }
    return r
}

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }