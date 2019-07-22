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

    if (obj["content"]) {
      processContent(obj["content"]);
    }
    string += `</div>`;
  }
}

const page = document.body.dataset.attr;

const div = document.createElement('div');

for (let prop in pages) {
  if (prop === page) div.innerHTML = template(pages[prop]);
}
