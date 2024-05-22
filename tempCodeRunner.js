var month = 5;
    if (month === 1){
        console.log("January"); 
    } else if (month === 2) {
        console.log("February");
    } else if (month === 3) {
        console.log("March");
    } else {
        console.log("Mounth is not January, February or March");
    }


    var month = 5;
    switch(month) {
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        default:
            console.log("Month is not January, February or March");
            break;
    }

    for (var i = 0; i < 10; i++) {
        console.log(i);
    }

    // var saida = "Texto qualquer";
    // document.write(saida);

    // var saida = "Texto qualquer";
    // alert(saida);

    // var saida = "Texto qualquer";
    // document.getElementById("algum-elemento-no-HTML").innerHTML = saida;

    var i = 0;
    while (i < 10){
        console.log(i);
        i++;
    }

    var i = 0;
    do {
        console.log(i);
        i++;
    } while(i < 10);

    function sayHello(){
        console.log("Hello");
    }

    sayHello();

    function output(text) {
        console.log(text);
    }

    output("Boa noite!", "Olá tudo bem!");

    function output(text) {
        console.log(text);
    }

    function sum (num1, num2) {

    }

    var result = sum(2, 3);
    output(result);

    function Book (title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }

    var book = new Book("Estrutura de Dados", 406, "978-85-7522-553-0");

    console.log(book.title);
    book.title = "Estrutura de Dados e algoritimos com JavaScript"
    console.log(book.title);
    console.log("Este livro possui : " + book.pages + "páginas.");


    function Book (title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }

    var book = new Book("Estrutura de Dados", 406, "978-85-7522-533-0");

    Book.prototype.printTitle = function(){
        console.log(this.title);
    };
    book.printTitle();


    function Book (title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
        this.printIsbn = function(){
            console.log("ISBN: " + this.isbn);
        }
    }
    var book = new Book ("Estrutura de Dados", 406, "978-85-7522-553-0");
    
    book.printIsbn();



