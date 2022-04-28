const article1 = {
    libelle: 'T-shirt',
    prixHT: 10,
    tauxTVA: 20,
    quantite: 1
};
const article2 = {
    libelle: 'short',
    prixHT: 20,
    tauxTVA: 10,
    quantite: 2
};
const article3 = {
    libelle: 'Pull',
    prixHT: 15,
    tauxTVA: 5,
    quantite: 3
};

const calculerTVA = (prixHT, tauxTVA) => {
    return prixHT * tauxTVA / 100;
};


const calculPanier = () => {
    let prixTotal = 0;
    const panier = [article1, article2, article3];
    panier.map(article => {
        if(article.quantite < 0) {
            return 'Erreur, la quantité est inférieur à 0';
        }
        prixTotal += (article.prixHT + calculerTVA(article.prixHT, article.tauxTVA)) * article.quantite;
    });
    console.log(`Le prix total du panier est de ${prixTotal} €`);
   
}

calculPanier();