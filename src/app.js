/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var ext = [".es", ".com", ".ie"];

  let result = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          result.push(
            pronoun[i]
              .concat(adj[j])
              .concat(noun[k])
              .concat(ext[l])
          );
        }
      }
    }
  }
  for (let m = 0; m < result.length; m++) {
    let fin = `<li>${result[m]}</li>`;

    document.write(fin);
  }
};
