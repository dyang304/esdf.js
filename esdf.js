//<![CDATA[

function isEvaluable(str)
{
    try
    {
        var x = eval(str);
    }
    catch (e)
    {
        return false;
    }

    return true;
}

const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const alphaOnly = alphabet.substring(10, alphabet.length);

function randString(len)
{
    var res = alphaOnly.charAt(Math.floor(Math.random() * alphaOnly.length));

    if (len < 0)
    {
        return "";
    }

    for (var i = 1; i < len; i++)
    {
        res += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }

    return res;
}

function randString_randLen(max_len)
{
    max_len = Math.round(max_len);
    var out = "";

    if (max_len <= 0)
    {
        return "";
    }

    for (var i = 0; i <= Math.floor(Math.random() * max_len); i++)
    {
        out += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }

    return out;
}

function randID_preset()
{
    return ("__" + randString(2) + "_" + randString(10) + "_" + randString(50));
}

function randClass_extended()
{
    var result = "";

    for (var i = 0; i < 3; i++)
    {
        result += (randString(20) + " ");
    }

    return (result + "regular_text " + randString(20));
}

function randClass_dbl()
{
    return (randString(20) + " " + randString(20));
}

function shuffle(name)
{
    var elem = document.getElementById(name);
    var txt = elem.innerText;
    elem.innerHTML = "";

    for (var j = 0; j < txt.length; j++)
    {
        var ch = document.createElement("span");
        ch.innerHTML = txt.charAt(j);
        elem.appendChild(ch);

        var ch_inv = document.createElement("span");
        ch_inv.setAttribute("style", "display: none;");
        ch_inv.innerHTML = randString_randLen(15);
        elem.appendChild(ch_inv);
    }
}

function shuffle_all(cName)
{
    var elems = document.getElementsByClassName(cName);
    var i = elems.length;

    for (var i = elems.length - 1; i >= 0; i--)
    {
        var elem = elems[i];
        var txt = elem.innerText;
        elem.innerHTML = "";

        for (var j = 0; j < txt.length; j++)
        {
            var ch = document.createElement("span");
            ch.innerHTML = txt.charAt(j);
            elem.appendChild(ch);
    
            var ch_inv = document.createElement("span");
            ch_inv.setAttribute("style", "display: none;");
            ch_inv.innerHTML = randString_randLen(20);
            elem.appendChild(ch_inv);
        }

        elem.removeAttribute("class");
    }
}

function shuffle_current_id(id)
{
    document.getElementById(id).setAttribute("id", randString(10));
}

function shuffle_classes(cName)
{
    var elems = document.getElementsByClassName(cName);

    for (var i = elems.length - 1; i >= 0; i--)
    {
        elems[i].setAttribute("class", randString(20));
    }
}

//]]>