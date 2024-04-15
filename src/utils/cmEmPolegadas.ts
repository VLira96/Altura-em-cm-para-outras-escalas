const cmEmPolegadas = (num: number) => {
    const numEmPolegadas = num / 2.54;
    return numEmPolegadas.toFixed(4);
}

export default cmEmPolegadas;