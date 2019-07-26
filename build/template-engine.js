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
      if (obj["block"]) string += `${obj["block"]}`;
      else string += " ";

      if (obj["elem"]) string += `__${obj["elem"]} `;
      else string += " ";

      if (obj["mods"]) {
        for (let prop in obj["mods"]) {
          string += `${obj["block"]}_${prop}_${obj["mods"][prop]} `
        }
      }

      if (obj["elemMods"]) {
        for (let prop in obj["elemMods"]) {
          string += `${obj["block"]}__${obj["elem"]}_${prop}_${obj["elemMods"][prop]} `
        }
      }

      if (obj["mix"]) processContent(obj["mix"], createClassName);
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
      string += `<div class="`;

      createClassName (obj);
      string = string.trim();
      string += `">`;

      if (obj["content"]) processContent(obj["content"], createDiv);

      string += `</div>`;
    }
  }

  else {
    throw new Error("Ваш JSON невалиден");
  }
}
