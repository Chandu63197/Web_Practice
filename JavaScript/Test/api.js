let image=document.getElementsByClassName('image')
let title=document.getElementsByClassName('title')
let brand=document.getElementsByClassName('brand')
let rating=document.getElementsByClassName('rating')
let price=document.getElementsByClassName('price')

let test=async()=>{
    let url='https://dummyjson.com/products'
    let response=await fetch(url)
    let res=await response.json()
    for(let i=0;i<=5;i++){
        image[i].src=res.products[i].thumbnail
        title[i].textContent=res.products[i].title
        brand[i].textContent=res.products[i].brand
        rating[i].textContent=res.products[i].rating
        let p=res.products[i].price*(res.products[i].discountPercentage/100)
        let p2=res.products[i].price-p
        price[i].textContent=Math.trunc(p2*83.27) 
    }
}
test()