const container = document.getElementById("array");
const rangeLabel = document.querySelector(".range");

let numberOfArrays = 50;

const change = event=>{
    numberOfArrays = event.target.value
    rangeLabel.innerHTML = numberOfArrays
}

function generatearray() {
    container.innerHTML = ""
    for (var i = 0; i < numberOfArrays; i++) {

        var value = Math.ceil(Math.random() * 100);

        var array_ele = document.createElement("div");

        array_ele.classList.add("block");

        array_ele.style.height = `${value * 3}px`;
        array_ele.style.transform = `translate(${i *4}em)`;

        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;

        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }
}

// Promise to swap two blocks
function swap(el1, el2) {
    return new Promise((resolve) => {

        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;

        window.requestAnimationFrame(function () {

            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, 250);
        });
    });
}

async function BubbleSort(delay = 20) {
    var blocks = document.querySelectorAll(".block");

    for (var i = 0; i < blocks.length; i += 1) {
        for (var j = 0; j < blocks.length - i - 1; j += 1) {

            blocks[j].style.backgroundColor = "#146C94";
            blocks[j + 1].style.backgroundColor = "#19A7CE";

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );

            console.log("run");
            var value1 = Number(blocks[j].childNodes[0].innerHTML);
            var value2 = Number(blocks[j + 1]
                .childNodes[0].innerHTML);

            if (value1 > value2) {
                await swap(blocks[j], blocks[j + 1]);
                blocks = document.querySelectorAll(".block");
            }

            blocks[j].style.backgroundColor = "#408E91";
            blocks[j + 1].style.backgroundColor = "#408E91";
        }

    
        blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
    }
}

generatearray()