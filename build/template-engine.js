/**
* @param  {object} obj — Структура блоков интерфейса в формате BEMJSON
* @return {string} HTML разметка страницы
*/

export default function (obj) {
  if(obj) {
    let string = "";
    createDiv (obj);
    return string;

    function createClassName (obj) {
      if (obj && obj["block"]) {
        string += `${obj["block"]}`;

        if (obj["elem"]) string += `__${obj["elem"]} `;
        else string += " ";

        if (obj["mods"]) {
          for (let prop in obj["mods"]) {
            string += `${obj["block"]}_${prop}_${obj["mods"][prop]} `;
          }
        } 

        if (obj["elemMods"]) {
          for (let prop in obj["elemMods"]) {
            if(obj["elem"]) string += `${obj["block"]}__${obj["elem"]}_${prop}_${obj["elemMods"][prop]} `;
            else string += " ";
          }
        }

        if (obj["mix"]) processContent(obj["mix"], createClassName);
      }   
      else throw new Error("В поле должно быть указано свойство block");         
    }

    function processContent(obj, callback) {
      if (Array.isArray(obj)) {
        obj.forEach(block => {
          processContent(block, callback);
        })
      }
      else callback.call(this, ...arguments);
    }

    function createDiv (obj) {
      if(obj) {
        string += `<div class="`;

        createClassName (obj);
        string = string.trim();
        string += `">`;

        if (obj["content"]) processContent(obj["content"], createDiv);

        string += `</div>`;
      }     
      else string += " "; 
    }
  }
  
  else {
    throw new Error("Ваш JSON невалиден");
  }
}
