export default function getRandomItem(list: any[]) {
  return list[Math.floor(Math.random() * list.length)];
}
