(() => {
    const couples = document.querySelector('.couples');
    
    const rahdomIdForCard = (lengthArry) => {
        const idCards = [];
        const idCards2x = [];
        while(idCards.length < lengthArry) {
            let r = Math.floor(Math.random() * lengthArry) + 1;
            if(idCards.indexOf(r) === -1) idCards.push(r);
        }

        for(arr of idCards) {
            idCards2x.push(arr);
            idCards2x.push(arr);
        }


        for(let i = idCards2x.length - 1; i > 0; i--) {
            j = Math.floor(Math.random()*(i + 1));
            temp = idCards2x[j];
            idCards2x[j] = idCards2x[i];
            idCards2x[i] = temp;
        }

        return idCards2x;
    }

    
    const addCards = () => {
        const cardList = document.createElement('ul');
        cardList.classList.add('couples__cardList');

        const arryRandom = rahdomIdForCard(8);
        
        for(let i=0; i<=15; i++) {
            const cardItem = document.createElement('li');
            cardItem.classList.add('couples__cardItem');
            cardItem.classList.add('animate__bounceIn');
            cardItem.classList.add(`couples__img${arryRandom[i]}`);
            cardItem.classList.add('flip');
            cardItem.dataset.num = arryRandom[i];
            cardList.append(cardItem);
        }

        return cardList;
    }
    couples.append(addCards());

    const clickCard = () => {
        const arrayItemCard = document.querySelectorAll('.couples__cardItem');

        const arrayData = [];

        arrayItemCard.forEach(e => e.addEventListener('click', cardClick = () => {
            arrayData.push(e.dataset.num)
            e.classList.remove('flip')
            // console.log(arrayData)
            if(arrayData.length  == 2) {
                if(arrayData[0] == arrayData[1]) {
                    // console.log('подходят')
                    const getDataCard = e.dataset.num;
                    const getClassCard = document.querySelectorAll(`.couples__img${getDataCard}`);
                    getClassCard.forEach(e => e.classList.add('couple'))
                } else if(arrayData[0] != arrayData[1]) {
                    // console.log('не подходят');

                }
                
                
                const getClassCard1 = document.querySelectorAll(`.couples__img${arrayData[0]}`);
                const getClassCard2 = document.querySelectorAll(`.couples__img${arrayData[1]}`);
                const getClassCouple = document.querySelectorAll('.couple');
                arrayData.length = 0;

                setTimeout(() => {
                        getClassCard1.forEach(e => e.classList.add('flip'))
                        getClassCard2.forEach(e => e.classList.add('flip'))
        
                        getClassCouple.forEach(e => {
                            if(e.classList[3] == 'couple') {
                                e.classList.remove('flip')
                            }
                        })
                }, 200)
            }
            addButton()

        }));


        

    }
    clickCard()
    
    const addButton = () => {
        const classCouples = document.querySelectorAll('.couple');
        console.log(classCouples.length)
        if(classCouples.length == 16) {
            const btn = document.createElement('a');
            btn.classList.add('couples__btn');
            btn.href = ''
            btn.innerHTML = 'Сыграть ещё раз'
            couples.append(btn);
        }
    }

})();