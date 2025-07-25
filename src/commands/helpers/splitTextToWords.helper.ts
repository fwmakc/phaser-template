export function splitTextToWords(text: string): Array<string> {
  return text.split(/[.,!?;:‘’“”()[\]{}«»"' _\-—–]+/iu).filter(Boolean);
}
