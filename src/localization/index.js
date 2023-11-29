import fa_ir from "./fa"
import en_us from "./en"


const lang = localStorage.getItem("lang")?localStorage.getItem("lang"):"en"
export {lang}

const direction = {
    fa:"rtl",
    en:"ltr"
}

function getDirection() {
     return direction[lang]
}
export  {getDirection}


const translates ={
    fa:fa_ir,
    en:en_us
}

function getTranslate() {
    return translates[lang]
}

export  {getTranslate}

function changeLanguage(newLang) {
    if (newLang===lang) {
        return
    }
    localStorage.setItem('lang',newLang)
    window.location.reload()
}

export {changeLanguage}
