export const getImageUrl = (path)=>{
    return new URL(`/asserts/${path}`,import.meta.url).href
}