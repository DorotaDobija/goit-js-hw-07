const categoryList = document.querySelectorAll(".item");

console.log(`Number of categories ${categoryList.length}`)

for (const category of categoryList) {
    console.log(`Category: ${ category.firstElementChild.textContent }`);
    console.log(`Elements: ${ category.lastElementChild.childElementCount }`);
}