const myCart = document.querySelector("header button");
const sidebar = document.querySelector(".sidebar");
const items_data = [];
const products = document.querySelectorAll(".product");
const sum_price_element = document.querySelector(".sum p span")
let sum = 0;


products.forEach((product,index)=>{

    product.lastElementChild.addEventListener("click",()=>{
        const product_name = product.children[1].innerHTML;
        const product_price = parseInt(product.children[3].innerHTML.slice(1));
        const find_object = items_data.find((element)=> {return element.name === product_name;});

        if(find_object === undefined){
            items_data.push({name : product_name, number: 1, price: product_price});
            const myItem = document.createElement("div");
            myItem.setAttribute("class", `items ${product_name}`);
            myItem.innerHTML = `Item Name: <span>${product_name}</span><br><br> $<span>30</span> X<span>${1}</span><br> <button class="minus-btn">-</button> <button class="plus-btn">+</button> <br> <button class="remove-btn">Remove</button>`;
            sidebar.appendChild(myItem);
            sum = 0;
            items_data.forEach((element)=>{sum += element.price * element.number;});
            sum_price_element.innerHTML = sum;
////////////remove btn /////////////
            myItem.children[9].addEventListener("click", (e)=>{
                items_data.pop({name: e.currentTarget.parentNode.className.slice(6)});
                sidebar.removeChild(e.currentTarget.parentNode);
                sum = 0;
                items_data.forEach((element)=>{sum += element.price * element.number;});
                sum_price_element.innerHTML = sum;
            });
//////////////plus btn /////////////
            myItem.children[7].addEventListener("click", (e)=>{
                let value = e.currentTarget.parentNode.className.slice(6);
                let item_data_object = items_data.find((element)=>{{return element.name === value}});
                item_data_object.number +=1;
                let number_element = e.currentTarget.parentNode.children[4];
                let price_element = number_element.previousElementSibling;
                number_element.innerHTML = parseInt(number_element.innerHTML)+1;
                price_element.innerHTML = item_data_object.price * parseInt(number_element.innerHTML);
                sum = 0;
                items_data.forEach((element)=>{sum += element.price * element.number;});
                sum_price_element.innerHTML = sum;
            });
//////////////minus btn /////////////
            myItem.children[6].addEventListener("click", (e)=>{
                let value = e.currentTarget.parentNode.className.slice(6);
                let item_data_object = items_data.find((element)=>{{return element.name === value}});
                item_data_object.number -=1;
                let number_element = e.currentTarget.parentNode.children[4];
                let price_element = number_element.previousElementSibling;
                number_element.innerHTML = parseInt(number_element.innerHTML)-1;
                price_element.innerHTML = item_data_object.price * parseInt(number_element.innerHTML);
                if(parseInt(price_element.innerHTML) === 0){
                    items_data.pop({name: e.currentTarget.parentNode.className.slice(6)});
                    sidebar.removeChild(e.currentTarget.parentNode);
                }
                sum = 0;
                items_data.forEach((element)=>{sum += element.price * element.number;});
                sum_price_element.innerHTML = sum;
            });
/////////////////////////////////////
        } else{
            find_object.number += 1;
            const theItem = document.querySelector(`.${find_object.name}`);
            // theItem.innerHTML = `Item Name: <span>${find.name}</span><br><br> X<span>${find.number}</span><br> <button class="minus-btn"> - </button><button class="plus-btn">+</button> <br> <button class="remove-btn">Remove</button>`;
            theItem.children[4].innerHTML = parseInt(theItem.children[4].innerHTML) + 1;
            theItem.children[3].innerHTML = parseInt(theItem.children[3].innerHTML) + find_object.price;
            sum = 0;
            items_data.forEach((element)=>{sum += element.price * element.number;});
            sum_price_element.innerHTML = sum;
        }
    });
});

myCart.addEventListener("click", ()=>{
    sidebar.classList.toggle("appear");
    // const page_one = document.querySelector(".page-one");
    const page_two = document.querySelector(".page-two");
    // page_one.classList.toggle("newPage")
    page_two.classList.toggle("newPage")

});


        // const product_price = product.children[3].innerHTML
        // const product_description = product.children[5].innerHTML

        ////////////////plus and minus btn /////
            // const plus_btn = document.querySelectorAll(".plus-btn");
            // const minus_btn = document.querySelectorAll(".minus-btn");
            // plus_btn.forEach((btn)=>{
                
            //     btn.addEventListener("click",()=>{
            //         find.number += 1;
            //         const theItem = document.querySelector(`.${find.name}`);
            //         theItem.children[3].innerHTML = parseInt(theItem.children[3].innerHTML) + 1;
            //     });
            // });
////////////////////////////////////////
            // const remove_btns = document.querySelectorAll(".remove-btn");
            // remove_btns.forEach((btn)=>{
            //     btn.addEventListener("click", ()=>{
            //         items_data.pop({name: btn.parentElement.className.slice(5)});
            //         sidebar.removeChild(btn.parentNode);
            //     });
            // });