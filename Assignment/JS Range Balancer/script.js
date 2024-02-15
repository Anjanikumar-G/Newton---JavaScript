// javascript code goes here
const selectors = {
    input: {
        a: '#range-a-holder input',
        b: '#range-b-holder input',
        max: '#max-sum-holder input'
    },
    value: {
        a: '#range-a-value',
        b: '#range-b-value',
        sum:'#sum'
    }
}
function maxSumChange(e){
    setMax(selectors.input.b,getMax()-getRangeAValue())
    setMax(selectors.input.a,getMax()-getRangeBValue())
}
function getInputValue(selector) {
    return document.querySelector(selector).value
}
function getMax() {
    return getInputValue(selectors.input.max)
}
function getRangeAValue() {
    return getInputValue(selectors.input.a)
}
function getRangeBValue() {
    return getInputValue(selectors.input.b)
}
function setSum(){
    document.querySelector(selectors.value.sum).innerText = parseInt(getRangeAValue()) +parseInt(getRangeBValue())
}
function setMax(selector, val) {
    document.querySelector(selector).max = val
}
function rangeAChange(e) {
    const vd = document.querySelector(selectors.value.a)
    vd.innerText = e.target.value
    setMax(selectors.input.b,getMax()-getRangeAValue())
    setSum()
}
function rangeBChange(e) {
    const vd = document.querySelector(selectors.value.b)
    vd.innerText = e.target.value
    setMax(selectors.input.a,getMax()-getRangeBValue())
    setSum()
}