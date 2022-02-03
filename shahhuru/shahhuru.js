box = [
    ["たかなわ","たかわ","こうわ"],
    ["かめいど","かめど","かめと"],
    ["こうじまち","おかとまち","かゆまち"],
    ["ごせいもん","おなりもん","おかどもん"],
    ["とどろき","たたら","たたりき"],
    ["しゃくじい","いじい","せきこうい"],
    ["ざっしょく","ざっしき","ぞうしき"],
    ["おかちまち","ごしろちょう","みとちょう"],
    ["しこね","ろっこつ","ししぼね"],
    ["こぐれ","こしゃく","こしゃく"]
]; 

for(let count =0;count<10;count++){
       //シャッフル前の配列
       const numberA = [0,1,2];
       //シャッフル後の配列（選択肢をシャッフルさせる）
           const newNumber = [];
       //シャッフルの記述
           while (numberA.length > 0) {
               n = numberA.length;
               k = Math.floor(Math.random() * n);
               newNumber.push(numberA[k]);
               numberA.splice(k, 1);
           }
               //シャッフル前の配列
       const numberB = [0,1];
       //シャッフル後の配列（選択肢をシャッフルさせる）
           const newNumber2 = [];
       //シャッフルの記述
           while (numberB.length > 0) {
               m = numberB.length;
               l = Math.floor(Math.random() * m);
               newNumber2.push(numberB[l]);
               numberB.splice(l, 1);
           }

    // console.log(newNumber);
    // console.log(newNumber2);

        
        

};
