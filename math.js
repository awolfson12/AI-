// Safe math helpers (ESM)
export const add = (a,b)=> Number(a)+Number(b);
export const subtract = (a,b)=> Number(a)-Number(b);
export const multiply = (a,b)=> Number(a)*Number(b);
export const divide = (a,b)=> Number(b)===0? null : Number(a)/Number(b);
export const clamp = (v,min,max)=> Math.min(Math.max(Number(v),Number(min)),Number(max));
export default { add, subtract, multiply, divide, clamp };
