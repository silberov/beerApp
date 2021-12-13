export const unitsToLetters = (unit:string) => {
    switch (unit) {
      case 'kilograms':
        return 'Kg';
      case 'litres':
          return 'L';
      case 'grams':
        return 'G'
      default:
        return ''
    }
  }