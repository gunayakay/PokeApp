async function customFetch(url, params) {
  return fetch(url).then((res) => res.json());
}

//Araştırma konusu: burada kullanılan yapı facade pattern olarak geçer. Gang of Four isimli yazılımcıların
// yazdığı Design Patterns adlı kitaptan esinlenilmiştir.
