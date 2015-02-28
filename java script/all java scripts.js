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
        case 'numeric':
            form['zodiak'].checked=false;
            form['east'].checked=false;
            nameZod = 'numeric';
            break;
        default:
    }
}


function isnumber(str)
	{
		var mas = new Array(10);

		for(var m=0; m<10; m++)
		{
			mas[m]=m;
		}

        var b = true;
		outer: for (var i = 0; i < str.length && b == true; i++)
                {
                    var k = str.charAt(i);
                    b = false;
                    for(var j = 0; j < mas.length; j++)
                    {
                         if(k == mas[j]) {
                             b = true;
                             continue outer;
                         }
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
        switch (nameZod) {
            case 'east':
                eastYear();
                break;
            case 'zodiak':
                zodiakDay();
                break;
            case 'numeric':
                numb();
                break;
            default:
        }
    }
}

function zodiakDay()
{
    var form = frames[0].window.document.forms["form1"];
    var id = form["month"].selectedIndex;
    if(((form["day"].value>=21)&&(id==2))||((form["day"].value<=20)&&(id==3)))
     top.frames[1].location='Zodiak/Sheep.html';
      else
       {
        if(((form["day"].value>=21)&&(id==3))||((form["day"].value<=21)&&(id==4)))
         top.frames[1].location='Zodiak/Calf.html';
          else
           {  
            if(((form["day"].value>=22)&&(id==4))||((form["day"].value<=21)&&(id==5)))
             top.frames[1].location='Zodiak/Twins.html';
              else
               {
                if(((form["day"].value>=22)&&(id==5))||((form["day"].value<=23)&&(id==6)))
                 top.frames[1].location='Zodiak/Crayfish.html';
                  else
                   {
                    if(((form["day"].value>=24)&&(id==6))||((form["day"].value<=23)&&(id==7)))
                     top.frames[1].location='Zodiak/Lion.html';
                      else
                       {
                        if(((form["day"].value>=24)&&(id==7))||((form["day"].value<=23)&&(id==8)))
                         top.frames[1].location='Zodiak/Girl.html';
                          else
                           {
                            if(((form["day"].value>=24)&&(id==8))||((form["day"].value<=23)&&(id==9)))
                             top.frames[1].location='Zodiak/Scales.html';
                              else
                               {
                                if(((form["day"].value>=24)&&(id==9))||((form["day"].value<=22)&&(id==10)))
                                 top.frames[1].location='Zodiak/Scorpion.html';
                                  else
                                   {
                                    if(((form["day"].value>=23)&&(id==10))||((form["day"].value<=21)&&(id==11)))
                                     top.frames[1].location='Zodiak/Shot.html';
                                      else
                                       {
                                        if(((form["day"].value>=22)&&(id==11))||((form["day"].value<=20)&&(id==0)))
                                         top.frames[1].location='Zodiak/Kozerog.html';
                                          else
                                           {
                                            if(((form["day"].value>=21)&&(id==0))||((form["day"].value<=19)&&(id==1)))
                                             top.frames[1].location='Zodiak/Vodoley.html';
                                              else
                                               {
                                                if(((form["day"].value>=20)&&(id==1))||((form["day"].value<=20)&&(id==2)))                                                                                                   top.frames[1].location='Zodiak/Fishes.html';
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
function numb()
{
	var s = 0;
	var t = 0;
	var sumall = 0;
    var form = frames[0].window.document.forms["form1"];
	var id = form["month"].selectedIndex + 1;
     
    for (var i = 0; i < form["day"].value.length; i++)
    {
         var k = form["day"].value.charAt(i);
          s += parseInt(k, 10)
    }
	
	for(i = 0; i < form["year"].value.length; i++)
	{
           var y = form["year"].value.charAt(i);
           s += parseInt(y, 10)
	}
	if(id.length > 1)
	{
		t = parseInt(id.charAt(0)) + parseInt(id.charAt(1));
	}
	else
		t = id;

	var sum = s + t;
	var g = sum.toString();

	while(g.length > 1)
	{
		var sum1 = 0;
		for(i = 0; i < g.length; i++)
		{
			var p = g.charAt(i);
			sumall = parseInt(sum1) + parseInt(p);
			sum1 = sumall;
		}
		g = sumall.toString();
	}
    if(sumall == 1)
	   top.frames[1].location='Number/1.html';
	else
	{
	 if(sumall==2)
	  top.frames[1].location='Number/2.html';
	   else
           {
	    if(sumall==3)
	     top.frames[1].location='Number/3.html';
              else
	      {
	       if(sumall==4)
	        top.frames[1].location='Number/4.html';
                 else
	         {
	          if(sumall==5)
	           top.frames[1].location='Number/5.html';
                    else
	            {
	             if(sumall==6)
	              top.frames[1].location='Number/6.html';
                       else
	               {
	                if(sumall==7)
	                 top.frames[1].location='Number/7.html';
                          else
	                  {
	                   if(sumall==8)
	                    top.frames[1].location='Number/8.html';
                             else
	                     {
	                      if(sumall==9)
	                       top.frames[1].location='Number/9.html';
			            }
                      }
                   }
                }
             }
          }
       }
    }
}














































                                    









