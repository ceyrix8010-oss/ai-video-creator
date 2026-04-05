export const validatePrompt = (prompt) => {
    if (!prompt || typeof prompt !== 'string') {
        throw new Error('Lütfen geçerli bir metin girin');
    }
    if (prompt.trim().length < 5) {
        throw new Error('Metin en az 5 karakter uzunluğunda olmalıdır');
    }
    if (prompt.length > 1000) {
        throw new Error('Metin 1000 karakteri geçemez');
    }
    return prompt.trim();
};