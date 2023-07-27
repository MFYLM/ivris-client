export const modifiedText = (originalText: string) => {
    return originalText
            .split('')
            .map((char, index) => (index == 0 ? char.toUpperCase() : char.toLowerCase()))
            .join('');
}
    
