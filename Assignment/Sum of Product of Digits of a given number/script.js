function sumOfProductOfDigits(n1, n2)
{
         // Your code here
         let sum = 0;
  const n1Str = String(n1);
  const n2Str = String(n2);

  const maxLength = Math.max(n1Str.length, n2Str.length);
  const paddedN1 = n1Str.padStart(maxLength, '0');
  const paddedN2 = n2Str.padStart(maxLength, '0');

  for (let i = 0; i < maxLength; i++) {
    const digit1 = parseInt(paddedN1[i]);
    const digit2 = parseInt(paddedN2[i]);
    sum += digit1 * digit2;
  }

  return sum;
}