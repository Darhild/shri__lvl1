/**
* @param  {object} obj — Структура блоков интерфейса в формате BEMJSON
* @return {string} HTML разметка страницы
*/

export default function (obj) {
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

    if (obj["mix"]) {
      if (Array.isArray(obj["mix"])) {
      obj["mix"].forEach(block => createClassName(block));
      }
      else createClassName(obj["mix"])
    }
  }

  function createDiv (obj) {
    string += `<div class="`;

    createClassName (obj);
    string = string.trim();
    string += `">`;

    if (obj["content"]) {
      if (Array.isArray(obj["content"])) {
      obj["content"].forEach(block => createDiv(block));
      }
      else createDiv(obj["content"])
    }
    string += `</div>`;
  }
}

