function commonElements(arr1, arr2){
   for ( let str of arr1){
    if ( arr2.includes(str)){
        console.log(str);
    }
   }

}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
              ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
               ['s', 'o', 'c', 'i', 'a', 'l']);