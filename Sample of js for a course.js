const NFTs = []

function mintNFT (_name, _eyeColor, _shirtType, _bling) {
    const NFT = {
        "name": _name,
        "eyeColor": _eyeColor,
        "shirtType": _shirtType,
        "bling": _bling
    }
    NFTs.push(NFT);
    console.log("Minted: " + _name);
}

function listNFTs () {
    for(let i = 0; i < NFTs.length; i++){
        console.log("\nName: " + NFTs[i].name);
        console.log("Eyecolor: " + NFTs[i].eyeColor);
        console.log("Shirt Type: " + NFTs[i].shirtType);
        console.log("Bling: " + NFTs[i].bling);
    }
}

function getTotalSupply(){
    console.log("\n" + NFTs.length);
}
mintNFT("Yuki", "Blue", "Polo", "Earring");
listNFTs();
getTotalSupply();