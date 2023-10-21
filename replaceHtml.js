module.exports=function(template, product){
    let output=template.replace("%Name%", product.name);
    output=output.replace("%id%", product.id);
    output=output.replace("%color%", product.color);
    output=output.replace("%ROM%", product.ROM);
    output=output.replace("%price%", product.price);
    output=output.replace("%%", product.modeName);

    return output;
}