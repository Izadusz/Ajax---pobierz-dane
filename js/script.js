let btnGetData = document.getElementById('get-data');
// console.log(btnGetData);

const getData = () => {
    // console.log('getData');

    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(res => res.json())
        .then(data => {

            let divData = document.createElement('div');
            let attrNode = document.createAttribute('class');
            attrNode.value = 'dane-programisty';
            divData.setAttributeNode(attrNode);

            divData.innerText = `Dane programisty: ${data}`;

            document.body.appendChild(divData);

           // console.log(data);

        })


}

btnGetData.addEventListener('click', getData);