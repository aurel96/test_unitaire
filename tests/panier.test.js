import {calculPanier,calculerTVA} from "../app.js"
import should from "should"

describe('Test fonction calculPanier', () => {
    it('calculPanier doit retourner un nombre', () => {


        should(calculPanier()).be.a.Number;
    }
    );
});
describe('test fonction calculTVA ',()=>{
    it('calculTVA doit retourner un nombre', ()=>{
        should(calculerTVA()).be.a.Number;
    })
})