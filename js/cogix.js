var ValidatorArray = new Array (); // holds validation statements to be evaluated in OnSubmit
var ValidatorArrayProperties = new Array();
ValidatorArrayProperties.ValidatorSuppress = false;  // if true, skip onSubmit validation

var i18nArray = new Array ();   //  hold translated strings; addressed as i18nArray('msgid');
//i18nArray['requiredanswer'] = "Please answer the question. If not sure of what question this refers to, press the space bar.";
i18nArray['requiredanswer'] = "Whoops! You forgot to finish the form!";
i18nArray['entervaluebetween'] = "Enter a value between %1 and %2";
i18nArray['entervaluenogreater'] = "Enter a value of %2 or below";
i18nArray['entervaluenoless'] = "Enter a value of %1 or above";
i18nArray['checknumbermsg'] = "Enter a number in format %1";
i18nArray['checkvaliddatemsg'] = "Use only numbers in dates, in format %X|%1 must be between %2 and %3; format is %X|Day|Month|Year|m/d/y";
i18nArray['checkvalidemailmsg1'] = "Two @s not allowed in an E-mail address.";
i18nArray['checkvalidemailmsg2'] = "The character '%1' is not allowed in an E-mail address.";
i18nArray['checkvalidemailmsg3'] = "@ missing from E-mail address.";
i18nArray['checkvalidemailmsg4'] = "E-Mail address cannot start with @.";
i18nArray['checkvalidemailmsg5'] = "E-mail domain name is missing a period.";
i18nArray['checkvalidemailmsg6'] = "E-mail domain name can't start with a period.";
i18nArray['checkvalidemailmsg7'] = "E-mail domain name can't end with a period.";



function onSubmitCartoonNetworkAtlantis2016() {
	promoClick('sweeps page : sweeps submit button clicked');
    return vwfOnSubmit();
    }

function qhelperCartoonNetworkAtlantis2016(d) {
    return vwfQhelper(d);   //  located in Standard_.js
    }

function qlengthcheckerCartoonNetworkAtlantis2016(a,b) {
    return vwfQlengthchecker(a,b);  //  located in Standard_.js
    }

var checkexpressionemail_address = "vwfCheckEmail ( document.forms['formCartoonNetworkAtlantis2016'].elements['email_address']) ";
var checkansweredexpressionemail_address = "checkQuestionAnswered(document.forms['formCartoonNetworkAtlantis2016'].elements['email_address'],' checked','','','0')";

ValidatorArray [ ValidatorArray.length ] = checkexpressionemail_address;
ValidatorArray [ ValidatorArray.length ] = checkansweredexpressionemail_address;

