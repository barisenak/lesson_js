class Storage {
    DrinkStorage = {};

    addValue(key, value){
        this.DrinkStorage[key] = value
    }

    getValue(infoName){
        if (infoName in this.DrinkStorage){
            return alert (`Состав данного напитка: ${this.DrinkStorage[infoName]}`)
        }else {
            return alert("Такого напитка нет в базе")}
    }

    deleteValue(keyToDelete){
        if (keyToDelete in this.DrinkStorage){
            delete this.DrinkStorage[keyToDelete]
            return alert (`${keyToDelete} удален из базы`)
        } else {
            return alert("Такого напитка нет в базе")}
    }

    getKeys(){
        const keys = Object.keys(this.DrinkStorage)
        if (keys.length !== 0 ){
            alert (`${keys}`)
        }else {
            alert ("Здесь ничего нет")}
    }
    
}

const drinks = new Storage()

const btnInputInfo = document.querySelector("#getInfo")
const btnReturnInfo = document.querySelector("#returnInfo")
const btnDeleteInfo = document.querySelector("#deleteInfo")
const btnAllInfo = document.querySelector("#allInfo")

btnInputInfo.addEventListener("click", () => {
    const name = prompt("Введите название напитка")
    const composition = prompt("Введите состав напитка")
    drinks.addValue(name, composition)
    console.log(drinks);
});

btnReturnInfo.addEventListener("click", () => {
    const infoName = prompt("Введите название напитка")
    drinks.getValue(infoName); 
});

btnDeleteInfo.addEventListener("click", () => {
    const name = prompt("Введите название напитка, который желаете удалить")
    drinks.deleteValue(name)
    console.log(drinks);
});

btnAllInfo.addEventListener("click", () => {
    drinks.getKeys()
});

