export function getFrame(prevKids, nextKids, progress, padding) {
  const current = prevKids.filter(e => nextKids.some(p => p.type === e.type))
  const exit = prevKids.filter(e => !nextKids.some(p => p.type === e.type))
  const enter = nextKids.filter(e => !prevKids.some(p => p.type === e.type))

  const currentHeights = getHeights(current)
  const exitHeights = getHeights(exit)
  const enterHeights = getHeights(enter)

  const prevTops = translates(
    [...exitHeights, ...currentHeights],
    [],
    enterHeights,
    padding
  )
  const nextTops = translates(
    [...currentHeights, ...enterHeights],
    exitHeights,
    [],
    padding
  )
  const frameTops = tween(prevTops, nextTops, progress)

  const frame = [...exit, ...current, ...enter].map((kid, i) => ({
    child: kid,
    translateY: frameTops[i],
    opacity: current.includes(kid)
      ? 1
      : exit.includes(kid)
      ? tweenOpacity(1 - progress)
      : tweenOpacity(progress),
  }))

  const height = sum(prevKids.map(k => (k && k.props && k.props.height) || 0))
  return { frame, height }
}

function tweenOpacity(t) {
  return Math.pow(t, 4)
}

function tween(prevs, nexts, t) {
  return prevs.map((p, i) => {
    const n = nexts[i]
    return (n - p) * t + p
  })
}

function getHeights(kids) {
  return kids.map(kid => {
    if (!kid || !kid.props || kid.props.height == null) {
      console.warn("View children should have a height prop")
      return 0
    } else {
      return kid.props.height
    }
  })
}

function translates(current, exit, enter, padding) {
  const total = sum(current) + (current.length - 1) * padding
  const middle = total / 2
  let acc = -middle
  const currentTops = current.map(h => {
    const top = acc
    acc += h + padding
    return top
  })

  const exitTotal = sum(exit) + exit.length * padding
  acc = (currentTops[0] || -200) - exitTotal
  const exitTops = exit.map(h => {
    const top = acc * 1.4
    acc += h + padding
    return top
  })

  acc = (middle || 200) + padding
  const enterTops = enter.map(h => {
    const top = acc * 1.4
    acc += h + padding
    return top
  })

  return [...exitTops, ...currentTops, ...enterTops]
}

function sum(array) {
  return array.reduce((a, b) => a + b, 0)
}
