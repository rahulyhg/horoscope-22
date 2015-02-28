﻿var nameZod='null';

window.onload = function () {
    frames[0].window.document.getElementById("submitButton1").addEventListener('click', procMain, false);
    var horoscopeTypes = frames[0].document.forms["form1"].querySelectorAll("input[type='radio']");
    for (var i = 0; i != horoscopeTypes.length; ++i) {
        horoscopeTypes[i].addEventListener('click', setHoroscopeType, false);
    }
};

function setHoroscopeType (event) {
    var form = frames[0].window.document.forms["form1"];
    switch (event.target.attributes["id"].value) {
        case 'zodiak':
            form['east'].checked=false;
            form['numeric'].checked=false;
            nameZod = 'zodiak';
            break;
        case 'east':
            form['zodiak'].checked=false;
            form['numeric'].checked=false;
            nameZod = 'east';
            break;
        default:
            form['zodiak'].checked=false;
            form['east'].checked=false;
            nameZod = 'numeric';
    }
}


function isnumber(str)
	{
		var b=false;
		mas = new Array(10);

		for(var m=0; m<10; m++)
		{
			mas[m]=m;
		}

		for (var i = 0; i < str.length; i++)
		{
			var k = str.charAt(i);
			for(var j=0; j < mas.length; j++)
		        {
			     if(k==mas[j])
			     b=true;
		        }
	         }
	return b;
}
  function analize()
  {
    var b=false;
    var form = frames[0].window.document.forms["form1"];
	var id=form["month"].selectedIndex;

	if(nameZod=='null')
	  alert("Выберите тип гороскопа!");
	else
	{
    if(((nameZod=='Neast')&&(form["year"].value==""))||((nameZod=='nzodiak')&&(form["day"].value==""))||((nameZod=='Nnumeric')&&((form["day"].value=="")||(form["year"].value==""))))
        alert("Заполните необходимые поля для данного типа гороскопа!");
           else
           {
           if((!isnumber(form["day"].value))||(!isnumber(form["year"].value)))
                  alert("Данные вводятся цифрами!");
           else
           {
            if((form["day"].value<1)||(form["day"].value>31))
               alert("Такого дня не существует!");
            else
            {
               if((form["day"].value==31)&&((id==3)||(id==5)||(id==8)||(id==10)))
                   alert("В этом месяце 30 дней!");
               else
               {
                if((form["day"].value>=29)&&(id==1)&&(!findVisokosnYear(form["year"].value)))
                    alert("В этом месяце 28 дней!");
                else
                  b=true;
                }
            }
            }
        }
    }
    return b;
}


function findYear(yearZod, inputYear)
{
	var b=false;
	var mod, res, c;
	mod=Math.abs(yearZod-inputYear);
	res=mod/12;
	c=Math.ceil(res);
	if(c==res)
	  b=true;
	else
	  b=false;

   return b;
}

function findVisokosnYear(inputYear)
{
	var b=false;
	var mod, res, c;
	mod=Math.abs(2008-inputYear);
	res=mod/4;
	c=Math.ceil(res);
	if(c==res)
	  b=true;
	else
	  b=false;
   return b
}

function eastYear()
{
    var form = frames[0].window.document.forms["form1"];
	if(findYear("1992", form["year"].value)==true)
        top.frames[1].location='East/Monkey.html';
       else
         {
	   if(findYear("1993", form["year"].value)==true)
	    top.frames[1].location='East/Cock.html';
	    else
            {
	      if(findYear("1994", form["year"].value)==true)
	       top.frames[1].location='East/Dog.html';
	       else
               {
	         if(findYear("1995", form["year"].value)==true)
	          top.frames[1].location='East/Pig.html';
	          else
                  {
	            if(findYear("1996", form["year"].value)==true)
	             top.frames[1].location='East/Mouse.html';
	             else
                     {
	              if(findYear("1997", form["year"].value)==true)
	                top.frames[1].location='East/Bull.html';
	                else
                        {
	                 if(findYear("1998", form["year"].value)==true)
	                   top.frames[1].location='East/Tiger.html';
	                  else
                          {
	                    if(findYear("1999", form["year"].value)==true)
	                      top.frames[1].location='East/Rabbit.html';
	                     else
                             {
	                       if(findYear("2000", form["year"].value)==true)
	                         top.frames[1].location='East/Dragon.html';
	                       else
                               {
	                          if(findYear("2001", form["year"].value)==true)
	                            top.frames[1].location='East/Snake.html';
	                          else
                                  {
	                             if(findYear("2002", form["year"].value)==true)
	                               top.frames[1].location='East/Horse.html';
	                            else
                                    {
	                                if(findYear("2003", form["year"].value)==true)
	                                  top.frames[1].location='East/Goat.html';
                                    }
                                  }
                                }
                                          
                              }
                           }
                        }
                     }
                 }
             }
         }
       }
}

function procMain () {
    if (analize()) {
        eastYear();
    }
}

function getXMLHTTP(){
    var XMLHTTP = null;
    // IE check.
    if(window.ActiveXObject){
        try{
            // IE6 check.
            XMLHTTP = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch(e){
            try{
                // IE5 check.
                XMLHTTP = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch(e){
            }
        }
    }
    else if(XMLHttpRequest){ // Rest of browsers.
        try{
            XMLHTTP = new XMLHttpRequest();
        }
        catch(e){
        }
    }
    return XMLHTTP;
}

