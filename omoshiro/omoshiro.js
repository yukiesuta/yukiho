// 形容詞の配列
const adjective = [
    "ashidamanano",
    "yasaizyuusugahaitta",
    "kaizyougakoorituita",
    "unntennmennkyoshouno",
    "zishouhosutono",
    "takenokonosatono",
    "yaseino",
    "korashono",
    "ananoaita",
    "gakurekinonai",
    "itumoyoriosoi",
    "kinoumoratta",
    "yu-tyu-bunoriyoukiyakuniihannsiteiru",
    "neboushita",
    "sutamennniitidomonattakotononai",
    "mainichigennkinihennziwosuru",
    "kannpekina",
    "dousaturyokunoaru",
    "ma-zyanngatuyoi",
    "tairyokuganai",
    "sawamura-gaaiyousiteiru",
    "shuugakuryokouniikenai",
    "mainitiho-murannwoutu",
    "hinohikarigakowai",
    "sumaburadaisuki",
    "rouninnseininattezyusshunenn",
    "bakadekai",
    "toudaishusekino"
];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  };

  shuffle(adjective);

console.log(adjective);




// // 名詞の配列
// const noun = [
//     "kutu",
//     "sannkousho",
//     "hanazawasann",
//     "iniesuta",
//     "kamaitachi",
//     "rinnzinn",
//     "hurudokei",
//     "dennkousekka",
//     "pinngeininn",
//     "guritogura",
//     "nikumann",
//     "konnbodayamada",
//     "supaida-otoko",
//     "zennnousinnzeusu",
//     "karateka",
//     "touhuya",
//     "itigennbutti",
//     "sinniriyunikurotenninn"
// ]

// const hakkou = document.getElementById("hakkou");

// // 出力するが押された時
// hakkou.addEventListener('click', () => {
//     // 形容詞の長さの配列を取得
//     let number1 = Array.from({length: adjective.length}, (_, i) => i+1)
//     //シャッフル後の配列（選択肢をシャッフルさせる）
//     const newNumber1 = [];
//     //シャッフルの記述
//     while (number1.length > 0) {
//         let n = number1.length;
//         let k = Math.floor(Math.random() * n);
//         newNumber1.push(number1[k]-1);
//         number1.splice(k, 1);
//     };
//     // 名詞の長さの配列を取得
//     let number2 = Array.from({length: noun.length}, (_, i) => i+1)
//     //シャッフル後の配列（選択肢をシャッフルさせる）
//     const newNumber2 = [];
//     //シャッフルの記述
//     while (number2.length > 0) {
//         let m = number2.length;
//         let l = Math.floor(Math.random() * m);
//         newNumber2.push(number2[l]-1);
//         number2.splice(l, 1);
//     };
//     const answerBox = document.getElementById('answerBox');
//     const pass = document.getElementById('pass');
//     // パスワードを設定
//     password = adjective[newNumber1[0]] + noun[newNumber2[0]];
//     // 一つ前の操作で出力したパスワードを削除
//     pass.remove();
//     // パスワードを挿入
//     answerBox.insertAdjacentHTML('afterbegin', `<div id ="pass">${password}</div>`);
// });

// // ホバーした時
// hakkou.addEventListener('mouseover', () => {
//     hakkou.classList.add('pointerEvent');
// });
// hakkou.addEventListener('mouseleave', () => {
//     hakkou.classList.remove('pointerEvent');
// });
