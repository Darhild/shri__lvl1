/**
* @param  {object} obj — Структура блоков интерфейса в формате BEMJSON
* @return {string} HTML разметка страницы
*/

export default function (obj) {
  try {
    let string = "";
    createDiv (obj);
    return string;

    function createClassName (obj) {
      if (obj["block"]) string += `${obj["block"]}`;

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

      if (obj["mix"]) processMix(obj["mix"]);
    }

    function processMix(obj) {
      if (Array.isArray(obj)) {
        obj.forEach(block => {
          processMix(block);
        })
      }
      else createClassName(obj);
    }

    function processContent(obj) {
      if (Array.isArray(obj)) {
        obj.forEach(block => {
          processContent(block);
        })
      }
      else createDiv(obj);
    }

    function createDiv (obj) {
      string += `<div class="`;

      createClassName (obj);
      string = string.trim();
      string += `">`;

      if (obj["content"]) processContent(obj["content"]);

      string += `</div>`;
    }
  }

  catch (err) {
    throw new Error(err)  
  }
}
