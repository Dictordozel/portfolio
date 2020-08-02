const image1 = document.querySelector('.image1'),
    subtitleOne = document.querySelector('.cards__subtitle-one'),
    subtitleTwo = document.querySelector('.cards__subtitle-two'),
    subtitleThree = document.querySelector('.cards__subtitle-three');

console.log(image1);

const deleteOpacity = (subtitle) => {
    subtitle.style.opacity = '1';
    subtitle.style.transform = 'translateX(0)';
};




const titleScroll = () => {
    if(subtitleOne.getBoundingClientRect().bottom <= 650) {
        deleteOpacity(subtitleOne);
    } else {
        subtitleOne.style.opacity = '0';
        subtitleOne.style.transform = 'translateX(150%)';
    }
    if(subtitleThree.getBoundingClientRect().bottom <= 850) {
        deleteOpacity(subtitleThree);

    } else {
        subtitleThree.style.opacity = '0';
        subtitleThree.style.transform = 'translateX(-150%)';
    }

    
};

document.addEventListener('scroll', titleScroll);