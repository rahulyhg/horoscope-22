﻿var nameZod='null';

function submitButtonClick () {
    if (isnumber (frames[0].window.document.getElementById("day").value)) {
        alert("Day: " + frames[0].window.document.getElementById("day").value);
    }
    else {
        alert("Please enter a valid day number.");
    }
}

window.onload = function () {
    frames[0].window.document.getElementById("submitButton1").addEventListener('click', submitButtonClick, false);
};

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
    var form = frames[0].window.document.forms[0];
	var id=form.getElementById("month").selectedIndex;

	if(nameZod=='null')
	  alert("Выберите тип гороскопа!");
	else
	{
    if(((nameZod=='Neast')&&(form.getElementById("year").value==""))||((nameZod=='nzodiak')&&(form.getElementById("day").value==""))||((nameZod=='Nnumeric')&&((form.getElementById("day").value=="")||(form.getElementById("year").value==""))))
        alert("Заполните необходимые поля для данного типа гороскопа!");
           else
           {
           if((!isnumber(form.getElementById("day").value))||(!isnumber(form.getElementById("year").value)))
                  alert("Данные вводятся цифрами!");
           else
           {
            if((form.getElementById("day").value<1)||(form.getElementById("day").value>31))
               alert("Такого дня не существует!");
            else
            {
               if((form.getElementById("day").value==31)&&((id==3)||(id==5)||(id==8)||(id==10)))
                   alert("В этом месяце 30 дней!");
               else
               {
                if((form.getElementById("day").value>=29)&&(id==1)&&(!FindVisokosnYear(form.getElementById("year").value)))
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
	if(findYear("1992", form.getElementById("year").value)==true)


        top.frames[1].location='East/Monkey.html';
       else
         {
	   if(findYear("1993", form.getElementById("year").value)==true)
	    top.frames[1].location='East/Cock.html';
	    else
            {
	      if(findYear("1994", form.getElementById("year").value)==true)
	       top.frames[1].location='East/Dog.html';
	       else
               {
	         if(findYear("1995", form.getElementById("year").value)==true)
	          top.frames[1].location='East/Pig.html';
	          else
                  {
	            if(findYear("1996", form.getElementById("year").value)==true)
	             top.frames[1].location='East/Mouse.html';
	             else
                     {
	              if(findYear("1997", form.getElementById("year").value)==true)
	                top.frames[1].location='East/Bull.html';
	                else
                        {
	                 if(findYear("1998", form.getElementById("year").value)==true)
	                   top.frames[1].location='East/Tiger.html';
	                  else
                          {
	                    if(findYear("1999", form.getElementById("year").value)==true)
	                      top.frames[1].location='East/Rabbit.html';
	                     else
                             { 
	                       if(findYear("2000", form.getElementById("year").value)==true)
	                         top.frames[1].location='East/Dragon.html';
	                       else
                               {
	                          if(findYear("2001", form.getElementById("year").value)==true)
	                            top.frames[1].location='East/Snake.html';
	                          else
                                  {
	                             if(findYear("2002", form.getElementById("year").value)==true)
	                               top.frames[1].location='East/Horse.html';
	                            else
                                    {
	                                if(findYear("2003", form.getElementById("year").value)==true)
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
