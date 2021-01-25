const huiswerkMaken = (vak, callback) => {
    setTimeout( () => console.log(`Ok, ok ik ga nu mijn ${vak} huiswerk maken`), 2500);
    callback();
}

const klaarMetHuiswerk = () => {
    console.log(`Kijk Paps/Mams, ik ben klaar met mijn huiswerk!`)
}

huiswerkMaken('wiskunde', klaarMetHuiswerk)