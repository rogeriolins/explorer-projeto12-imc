// functions
export function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

export const notNumber = (value) => isNaN(value) || value == ""
