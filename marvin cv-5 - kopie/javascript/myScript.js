let display = document.getElementById('displayResult');
let theme1 = document.querySelector('.numBut-container');
let switchNob = document.querySelector('.switchNob');
const result = document.querySelector(".result");
const logo = document.querySelector(".logo");
const themeLabel = document.querySelector(".theme-label");
const themeNum = document.querySelector(".theme-label-num");
const numBtnIs = document.querySelector(".numBtnIs");
const calculatorContainer = document.querySelector("#animatElement");

const invisibleNob1 = document.querySelector(".invisibleNob-1");
const invisibleNob2 = document.querySelector(".invisibleNob-2");
const invisibleNob3 = document.querySelector(".invisibleNob-3");
const root = document.documentElement;

let btn = Array.from(document.getElementsByClassName('btn'));
const mediaQuery = window.matchMedia('(max-width: 700px)');
function resetScreen() {
    if (display.innerText === 'Error' || display.innerText === '399,981') {
        display.innerText = '';

    }
}

btn.map(button => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case 'RESET':
                display.innerText = '';
                break;
            case 'DEL':
                resetScreen();
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':

                try {
                    display.innerText = eval(display.innerText.replace("x", "*").replace(",", "."));
                } catch {
                    display.innerText = 'Error'
                }
                break;
            default:
                resetScreen();
                display.innerText += e.target.innerText;
        }
    })
    //button style
    button.addEventListener("mousedown", () => {

        if (mediaQuery.matches) {
            button.style.transform = 'translate(0px, 2px)';
            button.style.boxShadow = '0px -0px 0px 0px var(--key-shadow3)';
        } else {
            button.style.transform = 'translate(0px, 5px)';
            button.style.boxShadow = '0px -0px 0px 0px var(--key-shadow3)';
        };
        window.addEventListener('resize', function windowUpdate() {

            if (window.innerWidth <= 700) {
                button.style.transform = 'translate(0px, 2px)';
                button.style.boxShadow = '0px -0px 0px 0px var(--key-shadow3)';
            } else {
                button.style.transform = 'translate(0px, 5px)';
                button.style.boxShadow = '0px -0px 0px 0px var(--key-shadow3)';
            };
        })


    })
    btn.map(button => {
        button.addEventListener("mouseup", () => {

            const mal = button.innerHTML == "DEL" || button.innerHTML == "RESET"
            const mol = button.innerHTML == "="
            sorting(mal, mol);
            function sorting(mal, mol) {
                if (mediaQuery.matches && mol) {
                    button.style.transform = 'translate(0px, -0px)';
                    button.style.boxShadow = '0px 3px 0px 0px var(--key-shadow2)';
                } else if (mol) {
                    button.style.transform = 'translate(0px, -0px)';
                    button.style.boxShadow = '0px 5px 0px 0px var(--key-shadow2)';
                } else if (mediaQuery.matches && mal) {
                    button.style.transform = 'translate(0px,-0px)';
                    button.style.boxShadow = '0px 3px 0px 0px var(--key-shadow1)';
                } else if (mediaQuery.matches && mal) {
                    button.style.transform = 'translate(0px,-0px)';
                    button.style.boxShadow = '0px 3px 0px 0px var(--key-shadow1)';
                } else if (mal) {
                    button.style.transform = 'translate(0px, -0px)';
                    button.style.boxShadow = '0px 5px 0px 0px var(--key-shadow1)';
                } else if (mediaQuery.matches) {
                    button.style.transform = 'translate(0px,-0px)';
                    button.style.boxShadow = '0px 3px 0px 0px var(--key-shadow3)';
                } else {
                    button.style.transform = 'translate(0px, -0px)';
                    button.style.boxShadow = '0px 5px 0px 0px var(--key-shadow3)';
                }
            }
            window.addEventListener('resize', function windowUpdate() {
                sortingUP(mal, mol);
                function sortingUP(mal, mol) {

                    if (window.innerWidth <= 700 && mol) {
                        button.style.transform = 'translate(0px, -0px)';
                        button.style.boxShadow = '0px 3px 0px 0px var(--key-shadow2)';
                    } else if (mol) {
                        button.style.transform = 'translate(0px, -0px)';
                        button.style.boxShadow = '0px 5px 0px 0px var(--key-shadow2)';
                    } else if (window.innerWidth <= 700 && mal) {
                        button.style.transform = 'translate(0px,-0px)';
                        button.style.boxShadow = '0px 3px 0px 0px var(--key-shadow1)';
                    } else if (window.innerWidth <= 700 && mal) {
                        button.style.transform = 'translate(0px,-0px)';
                        button.style.boxShadow = '0px 3px 0px 0px var(--key-shadow1)';
                    } else if (mal) {
                        button.style.transform = 'translate(0px, -0px)';
                        button.style.boxShadow = '0px 5px 0px 0px var(--key-shadow1)';
                    } else if (window.innerWidth <= 700) {
                        button.style.transform = 'translate(0px,-0px)';
                        button.style.boxShadow = '0px 3px 0px 0px var(--key-shadow3)';
                    } else {
                        button.style.transform = 'translate(0px, -0px)';
                        button.style.boxShadow = '0px 5px 0px 0px var(--key-shadow3)';
                    }
                }
            })


        })

    })
})


invisibleNob1.addEventListener('click', function () {
    switchTheme1()
})
invisibleNob2.addEventListener('click', function () {
    switchTheme2()
})
invisibleNob3.addEventListener('click', function () {
    switchTheme3()
})
let nobStand = 2;
const maxNum = 3;
switchNob.addEventListener('click', function () {
    if (nobStand == 1) {
        switchTheme1()
        nobStand++;
    } else if (nobStand == 2) {
        switchTheme2()
        nobStand++;
    } else if (nobStand == 3) {
        switchTheme3()
        nobStand++;
        if (nobStand > maxNum) {
            nobStand = 1;
        }
    }
});
function switchTheme1() {
    switchNob.style.left = '0px';
    // Backgrounds
    root.style.setProperty('--main-background', 'hsl(222, 26%, 31%)');
    root.style.setProperty('--keypad-background', 'hsl(223, 31%, 20%)');
    root.style.setProperty('--screen-background', 'hsl(224, 36%, 15%)');
    //Keys
    root.style.setProperty('--key-background1', 'hsl(225, 21%, 49%)');
    root.style.setProperty('--key-shadow1', 'hsl(224, 28%, 35%)');
    root.style.setProperty('--key-background2', 'hsl(6, 63%, 50%)');
    root.style.setProperty('--key-shadow2', 'hsl(6, 70%, 34%)');
    root.style.setProperty('--key-background3', 'hsl(30, 25%, 89%)');
    root.style.setProperty('--key-shadow3', 'hsl(28, 16%, 65%)');
    //Text
    root.style.setProperty('--Very-dark-grayish-blue', ' hsl(221, 14%, 31%)');
    result.style.color = 'hsl(0, 0%, 100%)';
    logo.style.color = 'hsl(0, 0%, 100%)';
    themeNum.style.color = 'hsl(0, 0%, 100%)';
    themeLabel.style.color = 'hsl(0, 0%, 100%)';
    numBtnIs.style.color = 'hsl(0, 0%, 100%)';
    nobStand = 1;
}
function switchTheme2() {
    switchNob.style.left = '21px';
    // Backgrounds
    root.style.setProperty('--main-background', 'hsl(0, 0%, 90%)');
    root.style.setProperty('--keypad-background', 'hsl(0, 5%, 81%)');
    root.style.setProperty('--screen-background', 'hsl(0, 0%, 93%)');
    //Keys
    root.style.setProperty('--key-background1', 'hsl(185, 42%, 37%)');
    root.style.setProperty('--key-shadow1', 'hsl(185, 58%, 25%)');
    root.style.setProperty('--key-background2', 'hsl(25, 98%, 40%)');
    root.style.setProperty('--key-shadow2', 'hsl(25, 99%, 27%)');
    root.style.setProperty('--key-background3', 'hsl(45, 7%, 89%)');
    root.style.setProperty('--key-shadow3', 'hsl(35, 11%, 61%)');
    //Text
    root.style.setProperty('--Very-dark-grayish-blue', ' hsl(60, 10%, 19%)');
    result.style.color = 'hsl(60, 10%, 19%)';
    logo.style.color = 'hsl(60, 10%, 19%)';
    themeNum.style.color = 'hsl(60, 10%, 19%)';
    themeLabel.style.color = 'hsl(60, 10%, 19%)';
    numBtnIs.style.color = 'hsl(0, 0%, 100%)';
    nobStand = 2;
}
function switchTheme3() {
    switchNob.style.left = '42px';
    root.style.setProperty('--main-background', 'hsl(268, 75%, 9%)');
    root.style.setProperty('--keypad-background', 'hsl(268, 71%, 12%)');
    root.style.setProperty('--screen-background', 'hsl(268, 71%, 12%)');
    //Keys
    root.style.setProperty('--key-background1', 'hsl(281, 89%, 26%)');
    root.style.setProperty('--key-shadow1', 'hsl(285, 91%, 52%)');
    root.style.setProperty('--key-background2', 'hsl(176, 100%, 44%)');
    root.style.setProperty('--key-shadow2', 'hsl(177, 92%, 70%');
    root.style.setProperty('--key-background3', 'hsl(268, 47%, 21%)');
    root.style.setProperty('--key-shadow3', 'hsl(290, 70%, 36%)');
    //Text
    root.style.setProperty('--Very-dark-grayish-blue', ' hsl(52, 100%, 62%)');
    result.style.color = 'hsl(52, 100%, 62%)';
    logo.style.color = 'hsl(52, 100%, 62%)';
    themeNum.style.color = 'hsl(52, 100%, 62%)';
    themeLabel.style.color = 'hsl(52, 100%, 62%)';
    numBtnIs.style.color = 'hsl(198, 20%, 13%)';
    if (nobStand > maxNum) {
        nobStand = 1;
    }
}
