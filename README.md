# NTI/ALD - Semestrální projekt 2022

#### Členové týmu
*   Pavel Vácha
*   Petr Boháč
*   Jakub Káčerek
*   Adam Sucharda
*   Marcel Horváth

### Popis aplikace
Uživatel přijde na stránku [ald.pavel-vacha.cz](https://ald.pavel-vacha.cz), kde se mu zobrazí `15x15` grid (úprava se dá provést manálně v kódu) a klikne na tlačítko `Generate`.

Pro aplikaci bylo využito technologie Vue3.
### Popis algoritmu

Základní myšlenka spočívá v tom, že všechny `Tiles` se můžou napojovat ze čtyř stran. To je reprezentováno _maskou_ ve formátu `xxxx`. Například maska `1111` vyjadřuje napojení ze všech stran.

První pozice na umístění `Tile` se vybere zcela náhodně (včetně náhodné `Tile`). Dále se náhodně vybírají sousedi a správné natočení `Tile` na základě masek v poli `connections`. Tento proces probíhá, dokud není plná plocha.

V případě, že není možno obsadit místo pomocí `Tile`, zobrazí se na této pozici křížek. 


## Vue stuff


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


