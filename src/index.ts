
let myname = "kadir"  // let verilen veriye göre değişken tipi almasını sağlar.
const myname2 = "ahmet" // let ile aynıdır tek farkı veri sonradan değiştirilemez.

let myname3: string = "ali" //myname3 değişkenine string değer tanımlanabileceğini belirtir.

myname3 = 123 // şeklinde tanımlanamaz.
myname3 = "selam" // şeklinde tanımlanabilir. Eğer iki veri tipinede tanımlanmak isteniyor ise;

let myname3: string | number = "ali" // şeklinde tanımlanması gerekirdi

// ! ( | ) işareti yada belirtir.


// bu şekilde veri tipi kontrol edilebilir.
if(typeof myname === 'string'){
    console.log("Bu değer bir string")
}

let b:any = 25; // tip tanımlamasını javascripte çevirir.



const Person = {
    isim: 'Emir' as String,
    soyad: 'bayraktar' as String,
    yas: 18 as Number,
};



const dizi: string[] = [] // 2 şekildede diziler içerisine alabileceği veri tiplerini belirtebilir.
const dizi2 = [] as string[]

const dizi3: (number | string | boolean)[] = [] // birden fazla veri tipi belirtmek istersen.
const dizi4: number[] | string[] | boolean[][] = [] //yada
const dizi5 = [] as Array<string> //yada

const mydizi: [string,string,number] = ['emir','bayraktar',12] // touple tanımlama şekli






