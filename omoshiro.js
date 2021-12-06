
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
    ];
const fff = [
    "kutu",
    "sannkousho",
]


document.getElementById("hakkou").addEventListener('click', () => {

// 形容詞の長さの配列を取得
    let number1 = Array.from({length: adjective.length}, (_, i) => i+1)
//シャッフル後の配列（選択肢をシャッフルさせる）
    const newNumber1 = [];
//シャッフルの記述
    while (number1.length > 0) {
        let n = number1.length;
        let k = Math.floor(Math.random() * n);
        newNumber1.push(number1[k]-1);
        number1.splice(k, 1);
    }
// console.log(newNumber1);
    // console.log(adjective[newNumber1[0]]);

// 形容詞の長さの配列を取得
    let number2 = Array.from({length: fff.length}, (_, i) => i+1)
//シャッフル後の配列（選択肢をシャッフルさせる）
    const newNumber2 = [];
//シャッフルの記述
    while (number2.length > 0) {
        let m = number2.length;
        let l = Math.floor(Math.random() * m);
        newNumber2.push(number2[l]-1);
        number2.splice(l, 1);
    }
// console.log(newNumber2);
    // console.log(fff[newNumber2[0]]);


console.log(adjective[newNumber1[0]] + fff[newNumber2[0]]  )



});
