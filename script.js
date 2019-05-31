function updateName(){
    let name = $("#name").val();

    $("#font-1").text("1 - "+name);
    $("#font-2").text("2 - "+name);
    $("#font-3").text("3 - "+name);
    $("#font-4").text("4 - "+name);
    $("#font-5").text("5 - "+name);
    $("#font-6").text("6 - "+name);
    $("#font-7").text("7 - "+name);
    $("#font-8").text("8 - "+name);
    $("#font-9").text("9 - "+name);
    $("#font-10").text("10 - "+name);
    $("#font-11").text("11 - "+name);
    $("#font-12").text("12 - "+name);
    $("#font-13").text("13 - "+name);
    $("#font-14").text("14 - "+name);
    $("#font-15").text("15 - "+name);
}

function fontDisplayToggle(fontId, checkbox){
    let fontDisplay = $("#font-"+fontId);
    let isChecked = $(checkbox).is(":checked");

    if(isChecked)
        $(fontDisplay).show();
    else
        $(fontDisplay).hide();
}