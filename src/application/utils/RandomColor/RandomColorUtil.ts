const usedHues = new Set<number>() // To track used hues and avoid duplicates

export const randomColorUtil = () => {
  const allowedHueRanges = [
    [200, 260],
    [50, 90],
    [0, 20],
    [270, 320],
  ]

  const getRandomInRange = (range: number[]) =>
    Math.floor(Math.random() * (range[1] - range[0]) + range[0])

  let hue
  let attempts = 0

  do {
    const hueRange =
      allowedHueRanges[Math.floor(Math.random() * allowedHueRanges.length)]
    hue = getRandomInRange(hueRange)
    attempts++
  } while (usedHues.has(hue) && attempts < 10)

  usedHues.add(hue)

  const saturation = Math.floor(Math.random() * 30) + 50
  const lightness = Math.floor(Math.random() * 30) + 40

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}
