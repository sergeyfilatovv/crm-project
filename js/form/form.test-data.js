
class testData{
    constructor(name, phone, email, product){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.product = product
    }
}

const testObj = [
    new testData("SergeyBoss", "89053212188", "don.filato2010@yandex.ru", "course-js" ),
    new testData("Василий Иванов", "899937961683", "info@1994.ru", "course-html" ),
    new testData("Сергей Жидков", "89056789546", "serega.up1995@mail.ru", "course-vue" ),
    new testData("Анастасия Филатова", "89675063337", "anastasia.filat@icloud.ru.ru", "course-wordpress" ),
    new testData("Сергей Громов", "89053212188", "sergio.grom@yandex.ru", "course-php" )
]
function getTestIndex(max){
    return Math.floor(Math.random()* max);
}

export default function getTestData(){
    return testObj[getTestIndex(testObj.length)];  
}


   


