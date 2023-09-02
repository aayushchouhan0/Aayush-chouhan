let string ="";
const allButton = document.querySelectorAll(".typing-section");
let input = document.querySelector(".input-section input[type='text']");
console.log(input)

 Array.from(allButton).forEach((button)=>{
      button.addEventListener("click" , (e)=>{
       
        if (e.target.textContent == 'C') {
            string = ""
            input.value = string; 
        }
        else if (e.target.textContent == '=') {
          string =eval(string)
            input.value = string; 

        }
        else{
          string += e.target.textContent;
          input.value = string; 
        }
      })
 })
for (let index = 0; index < allButton.length; index++) {
  console.log(allButton[index])
}

