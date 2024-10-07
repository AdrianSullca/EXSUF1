export function counter() {
  let n = 0
  return function () {
    n++
    return n
  }
}

const count = counter()
const count2 = counter()
count()
count()
count()
count()

count2()
count2()
count2()