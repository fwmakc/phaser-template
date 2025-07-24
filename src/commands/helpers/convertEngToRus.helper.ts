export function convertEngToRus(input: string) {
  const output = input
    .replaceAll('q', 'й')
    .replaceAll('w', 'ц')
    .replaceAll('e', 'у')
    .replaceAll('r', 'к')
    .replaceAll('t', 'е')
    .replaceAll('y', 'н')
    .replaceAll('u', 'г')
    .replaceAll('i', 'ш')
    .replaceAll('o', 'щ')
    .replaceAll('p', 'з')
    .replaceAll('[', 'х')
    .replaceAll(']', 'ъ')

    .replaceAll('a', 'ф')
    .replaceAll('s', 'ы')
    .replaceAll('d', 'в')
    .replaceAll('f', 'а')
    .replaceAll('g', 'п')
    .replaceAll('h', 'р')
    .replaceAll('j', 'о')
    .replaceAll('k', 'л')
    .replaceAll('l', 'д')
    .replaceAll(';', 'ж')
    .replaceAll("'", 'э')

    .replaceAll('z', 'я')
    .replaceAll('x', 'ч')
    .replaceAll('c', 'с')
    .replaceAll('v', 'м')
    .replaceAll('b', 'и')
    .replaceAll('n', 'т')
    .replaceAll('m', 'ь')
    .replaceAll(',', 'б')
    .replaceAll('.', 'ю');

  return output !== input ? output : '';
}
