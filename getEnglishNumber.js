let englishNumber = (()=> {
    let raw = ''
    let sequence = ['0','1','2','3','4','5','6','7','8','9', '.'];
    let keyCodes = {
        farsi:{
            android:['1776','1777','1778','1779','1780','1781','1782','1783','1784','1785','1643'],
            iphone:['1632','1633','1634','1635','1636','1637','1638','1639','1640','1641','1643']
        }
    }
    let setString = (rawNumber)=>{
        raw = rawNumber.toString();
    }
    let isEnglish = (char)=>{
        return sequence.includes(char.toString(10))
    }
    let getEnglishChar = (nonEnglishChar)=>{
        for (let key  in keyCodes.farsi){
            if(keyCodes.farsi[key].includes(nonEnglishChar.toString(10))){
                let index = keyCodes.farsi[key].indexOf(nonEnglishChar.toString(10));
                return sequence[index];
            }
        }
    }
    let getEnglishNumber = (rawNumber)=>{
        setString(rawNumber);
        let result = '';
        for(let i = 0 ; i<=raw.length -1 ; i++){
            let index = ''
            if(isEnglish(raw.charAt(i).toString(10))){
                index = sequence.indexOf(raw.charAt(i).toString(10));
                result += sequence[index];
            }else {
                let englishChar = getEnglishChar(raw.charCodeAt(i))
                if(englishChar){
                    result += englishChar
                }
            }

        }
        return result
    }
  
    return {
        getEnglishNumber: getEnglishNumber
    };
  })();
  export {englishNumber}