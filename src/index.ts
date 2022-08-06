const cpf_validator = (cpf: string): boolean => {
    const number = cpf.replace(/\D/g, '');

    if (!number || number.length != 11 || number.match(/^(\d)\1{10}/g)) return false;

    let sum = 0;
    let rest: number;
    for (let index = 1; index <= 9; index++) {
        sum = sum + parseInt(number.substring(index - 1, index)) * (11 - index);
    }

    rest = (sum * 10) % 11;
    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(number.substring(9, 10))) return false;

    sum = 0;
    for (let index = 1; index <= 10; index++) {
        sum = sum + parseInt(number.substring(index - 1, index)) * (12 - index);
    }

    rest = (sum * 10) % 11;
    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(number.substring(10, 11))) return false;

    return true;
};

export default cpf_validator;