var exp = $(".acZ").find(".gD");

email_exp = exp.attr("email");

// Console log lorsque on mouse over sur le destinataire de l'email

exp.on("mouseover",function() {alert("j'ai moussé over : "+email_exp);})