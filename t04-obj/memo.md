## TEHTÄVÄ 4 - OLIOT JA PERIYTYMINEN

#### Pohdi seuraavia kysymyksiä itsenäisesti ja hae aiheesta tietoa webistä (5 min)

1. Miten JavaScriptillä voidaan toteuttaa olio-ohjelmointia?
2. Kuinka periytyminen toteutetaan JavaScriptissä?

#### Jakaannutaan kolmen hengen ryhmiin keskustelemaan aiheesta (15 min)

##### Tallentakaa ryhmänne muistiinpanot yhden jäsenen GitHub-repositoryyn Markdown-muodossa

```sh
cd ~/git/JS-harjoitukseni;
touch t04-obj/memo.md
git add .
git commit -m 'memo lisätty repoon'
git push
```

##### Muokatkaa memoa GitHubin selainkäyttöliittymän kautta

#### Esitellään ryhmien muistiinpanot (5 min / ryhmä)


------------------------------------------------------------------------------------------

Olioiden toteutus
- olioliteraalit
- konstruktorifunktioiden avulla
- kapselointi ei toteudu 


var opettaja = { nimi : "Jaakko", 
              aantele: function(){return "kvak kvak!"}
            } 


function Opettaja(nimi, syntymavuosi) {
    this.nimi = nimi;
    this.syntymavuosi = syntymavuosi;
    this.aloitaRuokatunti = function(){alert(this.nimi + " menee nyt syomaan...")}
}




Periytyminen
- eräänlainen prototyppiperiytyminen
- 





