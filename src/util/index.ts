export function getRandomIntArry(min: number, max: number): Array<number> {
  const arr = []
  min = Math.ceil(min)
  max = Math.floor(max)
  while (arr.length < 8) {
    const r = Math.floor(Math.random() * (max - min)) + min
    if (arr.indexOf(r) === -1) arr.push(r)
  }
  return arr
}

export function externalToSlug(text: string): string[] {
  const slug = text
    .replace(/\//g, '')
    .replace('https:', '')
    .replace('.vercel.app', '')
    .split('.')
  return slug
}
