let currentInput ="0";
let expression = "";
let shouldResetDisplay = false;
let currentTheme= "light";


const currentDisplay = document.getElementById("current-display")
const historyDisplay = document.getElementById("history-display");
const historyItemsList = document.getElementById("history-items-list");

function updateUIDisplay(){
    currentDisplay.innerText = currentInput;
    historyDisplay.innerText = expression;

}
function appendNumber(num){
    if (currentInput === "0" || shouldResetDisplay){
        currentInput = num === "."? "0." :num;
        shouldResetDisplay = false;
    }else{
        if (num === "."&& currentInput.includes(".")){
            return;
        }
        currentInput+=num;
    }
    updateUIDisplay();
}

function appendOperator(op){
    if (shouldResetDisplay){
        shouldResetDisplay=false;
    }
    let dynamicOp = op;
    if (op==="*"){
        dynamicOp = "×";
    }
    if (op === "/"){
        dynamicOp= "÷"
    }
    expression = `${currentInput} ${dynamicOp}`;
    shouldResetDisplay = true;
    updateUIDisplay();

}

function calculate(){
    if(!expression || expression.endsWith("= ")) return;

    let mathExpression = (expression + currentInput)
        .replace(/×/g, "*")
        .replace(/÷/g, "/");
    try{
        const result=new Function(`return ${mathExpression}`)();
        if(result === undefined || isNaN(result)) throw new Error();
        const formattedResult = Number(result.toFixed(8)).toString();
        
        const li = document.createElement("li");
        li.innerHTML = `${expression} ${currentInput}<br><strong>${formattedResult}</strong>`;
            if (historyItemsList.querySelector(".empty-msg")) {
                historyItemsList.innerHTML = "";
            }
            historyItemsList.prepend(li);

            
            expression = `${expression} ${currentInput} =`;
            currentInput = formattedResult;
            shouldResetDisplay = true;

    } catch (error) {
        currentInput = "Error";
         expression = "";
        shouldResetDisplay = true;
    }
    updateUIDisplay();
        
}
function clearDisplay(){
    currentInput = "0";
    expression = "";
    updateUIDisplay();
}
function deleteLast(){
    if(shouldResetDisplay)return;
    currentInput = currentInput.length>1? currentInput.slice(0,-1):"0";
    updateUIDisplay();
}

function clearHistoryEntries() {
    historyItemsList.innerHTML = '<li class="empty-msg" style="text-align:center;color:var(--text-secondary);">No history</li>';
}

let isHistoryOpen =false;
function toggleTheme(){
    const htmlElement = document.documentElement;
    const themeText = document.getElementById("theme-text");
    const themeBtnIcon = document.querySelector("#theme-btn .icon");
     if (currentTheme === "light") {
        currentTheme = "dark";
        htmlElement.setAttribute("data-theme", "dark");
        themeText.innerText = "Light Mode";
        themeBtnIcon.innerText = "☀️";
    } else {
        currentTheme="light";
        htmlElement.setAttribute("data-theme", "light");
        themeText.innerText = "Dark Mode";
        themeBtnIcon.innerText = "🌙";
    }
}

function toggleHistoryPanel() {
    const drawer = document.getElementById("history-drawer");
    const appWrapper = document.getElementById("app-container-wrapper");
    isHistoryOpen = !isHistoryOpen;
    
    if (isHistoryOpen) {
        drawer.classList.add("open");
        appWrapper.classList.add("blur-active");
    } else {
        drawer.classList.remove("open");
        appWrapper.classList.remove("blur-active");
    }
}
updateUIDisplay();


